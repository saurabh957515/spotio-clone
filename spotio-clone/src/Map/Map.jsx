import React, { useEffect, useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import ArcGISMap from "@arcgis/core/Map";
import Supercluster from "supercluster";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import debounce from "lodash.debounce";
import ReactDOMServer from 'react-dom/server';
import { loadModules } from 'esri-loader';
import SideBar, { classNames } from "./Partials/SideBar";
import { Bars3Icon } from "@heroicons/react/24/outline";
import axios from 'axios'

import Point from '@arcgis/core/geometry/Point.js';
// Rename component to avoid conflict with ArcGIS `Map` class
const Map = () => {
  const mapDiv = useRef(null); // Use `useRef` for DOM element
  const [view, setView] = useState(null); // View state for the map
  const [isMapCreated, setIsMapCreated] = useState(false);
  const superclusterRef = useRef(null);
  const clusterLayer = useRef(null); // Explicitly typing as GraphicsLayer or null
  const [openSideBar, setOpenSideBar] = useState(false);
  const [mapCoordinates, setMapCoordinates] = useState({
    latitude: "",
    longitude: "",
  })

  const SingleOneMarker = ({ className, fillColor }) => <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    className={className}
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#glow)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 28C26.6274 28 32 22.6274 32 16C32 9.37258 26.6274 4 20 4C13.3726 4 8 9.37258 8 16V28H20Z"
        fill="white"
      />
      <path
        d="M31.5 16C31.5 22.3513 26.3513 27.5 20 27.5H8.5V16C8.5 9.64873 13.6487 4.5 20 4.5C26.3513 4.5 31.5 9.64873 31.5 16Z"
        stroke="#EFEEED"
      />
    </g>

    <svg
      x="12"
      y="7"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
    >
      <circle cx="8" cy="9" r="8" fill={fillColor} />
      <path d="M6.156 5.56V4.54H8.58V13H7.428V5.56H6.156Z" fill="white" />
    </svg>
  </svg>

  useEffect(() => {
    superclusterRef.current = new Supercluster({
      radius: 40,
      maxZoom: 20,
      minZoom: 0,
    });
    const features = [];
    superclusterRef.current.load(features);
  }, []);
  let controller;
  const addClustersToMap = useRef(

    debounce(async (minLat, maxLat, minLon, maxLon, zoomLevel) => {
      if (!superclusterRef.current) return;
      if (controller) {
        controller.abort();
      }

      // Create a new AbortController for the new request
      controller = new AbortController();

      try {
        const { data, errors } = await axios.get("/api/getby", {
          params: {
            minLat, maxLat, minLon, maxLon, zoomLevel
          },
          signal: controller.signal  // Attach the signal here
        });

        if (!errors) {
          const newCluster = data;
          clusterLayer.current.removeAll();
          if (newCluster?.length > 0) {
            newCluster?.forEach((cluster) => {
              console.log(cluster)
              const longitude = cluster?.center?.lon;
              const latitude = cluster?.center?.lat;
              const isCluster = true;
              let size = 30;
              let pointCount = isCluster ? cluster.count : 0;
              if (isCluster) {
                size = Math.min(70, Math.max(30, pointCount * 0.5));
              }

              const pinIconSvgString = ReactDOMServer.renderToStaticMarkup(
                <SingleOneMarker
                  fillColor={
                    "black"
                  }
                  className="w-6 h-6 text-blue-500 "
                />
              );
              const encodedPinIconSvg = encodeURIComponent(pinIconSvgString);
              const symbol = isCluster
                ? {
                  type: "simple-marker",
                  style: "circle",
                  text: cluster.count.toString(),
                  label: pointCount.toString(),
                  color:
                    true
                      ? "#1F2836"
                      : "#5789D7",
                  size: `${size}px`,
                  outline: {
                    color: "white",
                    width: 1.25,
                  },
                  font: {
                    size: "12px",
                    family: "sans-serif",
                    weight: "bold",
                  },
                }
                : {
                  type: "picture-marker",
                  url: "data:image/svg+xml;charset=UTF-8," + encodedPinIconSvg,
                  width: "40px",
                  height: "40px",
                };

              const graphic = new Graphic({
                geometry: {
                  type: "point",
                  longitude,
                  latitude,
                },
                symbol,
                id: cluster?.id,
                text: cluster.count || 1,
                cluster: isCluster,
                size: size,
              });

              clusterLayer.current.add(graphic);
              if (isCluster) {
                const labelGraphic = new Graphic({
                  geometry: {
                    type: "point",
                    longitude,
                    latitude,
                  },
                  symbol: {
                    type: "text",
                    color: "white",
                    haloColor: "black",
                    haloSize: "1px",
                    text: cluster.count.toString(),
                    xoffset: 0,
                    yoffset: 0,
                    font: {
                      size: "12px",
                      family: "sans-serif",
                      weight: "bold",
                    },
                  },
                  cluster_id: cluster?.id,
                  id: cluster?.id,
                  text: cluster.count || 1,
                  cluster: isCluster,
                  size: size,
                });
                clusterLayer.current.add(labelGraphic);
              }
            });
          }
        }
      } catch (error) {
        console.error(error)
      }

    }, 150)
  ).current;
  useEffect(() => {
    if (!mapDiv.current) return; // Ensure ref is available
    const mapView = new MapView({
      container: mapDiv.current,
      map: new ArcGISMap({
        basemap:
          "streets-navigation-vector"
      }),
      zoom: 2,
      center: [-84.006, 40.7128], // Set the initial map center coordinates
      constraints: {
        minZoom: 2,
        maxZoom: 20,
        rotationEnabled: false,
      },
      ui: {
        components: [], // Remove the default UI components (optional)
      },
    });

    const layer = new GraphicsLayer();
    clusterLayer.current = layer;

    mapView.on('click', event => {
      mapView.hitTest(event).then(response => {
        const graphic = response.results[0]?.graphic;
        setMapCoordinates({
          latitude: event?.mapPoint?.latitude,
          longitude: event?.mapPoint?.longitude,
        })
        setOpenSideBar(true)
        if (graphic?.cluster) {
          const point = new Point({
            x: graphic?.coordinates[0],
            y: graphic?.coordinates[1],
            spatialReference: { wkid: 4326 },
          });
        } else if (graphic?.text === 1) {
          console.log(graphic?.coordinates[0])

        }
      });
    });




    mapView.map.add(layer, 5);
    loadModules([
      'esri/geometry/SpatialReference',
      'esri/geometry/support/webMercatorUtils',
    ])
      .then(([SpatialReference, webMercatorUtils]) => {
        let previousZoom = mapView.zoom;
        mapView.watch('extent', async newExtent => {
          const currentZoom = Math.round(mapView.zoom);
          if (newExtent) {
            const { xmin, ymin, xmax, ymax } = newExtent;

            const extent = {
              xmin: xmin,
              ymin: ymin,
              xmax: xmax,
              ymax: ymax,
              spatialReference: SpatialReference.WebMercator,
            };

            const geoExtent = webMercatorUtils.webMercatorToGeographic(extent);
            let {
              xmin: minLon,
              ymin: minLat,
              xmax: maxLon,
              ymax: maxLat,
            } = geoExtent;
            if (currentZoom !== previousZoom) {
              // clusterLayer.current.removeAll();
              // setIsClusterPopUp(false);
            }
            // setBoundingBox({
            //   minLat: minLat,
            //   maxLat: maxLat,
            //   minLon: minLon,
            //   maxLon: maxLon,
            // });
            addClustersToMap(
              minLat,
              maxLat,
              minLon,
              maxLon,
              currentZoom,
            );

            previousZoom = currentZoom;
          }
        });
      })
      .catch(err => {
        console.error('Error loading ArcGIS modules: ', err);
      });
    addClustersToMap()
    let isZooming = false;
    mapView.on('mouse-wheel', (event) => {
      event.stopPropagation();
      if (isZooming) return;
      isZooming = true;

      const zoomChange = event.deltaY > 0 ? -1 : 1;
      const targetZoom = mapView.zoom + zoomChange;

      mapView
        .goTo(
          { zoom: targetZoom },
          {
            duration: 400, easing: 'ease-in-out',
          }
        )
        .finally(() => {
          isZooming = false;
        });
    });

    setView(mapView); // Set the view state
    setIsMapCreated(true); // Map creation flag

    // Cleanup on unmount
    return () => {
      if (mapView) {
        mapView.destroy();
      }
    };
  }, []);
  useEffect(() => {

  }, [view]);

  return <div className="relative flex w-full h-full overflow-auto">
    {!openSideBar &&
      <div
        onClick={() => {
          setOpenSideBar(true)
        }}
        className={'absolute right-3  top-4 z-50 cursor-pointer rounded-full p-2 bg-white'}
      >
        <Bars3Icon className="w-6 h-6 text-latisGray-900 hover:text-latisSecondary-900" />
      </div>}

    <div className="flex-1 overflow-hidden " ref={mapDiv} />
    <SideBar mapCoordinates={mapCoordinates} isPopUpOpen={openSideBar} setIsPopUpOpen={setOpenSideBar} />
  </div>
};

export default Map;

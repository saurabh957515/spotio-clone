import { useEffect, useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import ArcGISMap from "@arcgis/core/Map";
import Supercluster from "supercluster";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import debounce from "lodash.debounce";
import ReactDOMServer from "react-dom/server";
import { loadModules } from "esri-loader";
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import AddPointPopUp from "./Partials/AddPointPopUp";
import Point from "@arcgis/core/geometry/Point.js";
import SideBar from "./Partials/SideBar";
import SingleOneMarker from "../Icons/SingleOneMarker";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
const Map = () => {
  type Cluster = {
    boundingBox: [[number, number], [number, number]];
    center: { lat: number; lon: number };
    count: number;
  };
  type PopupCoordinates = [number, number] | null;
  const mapDiv = useRef(null);
  const [view, setView] = useState<MapView | null>(null);
  const superclusterRef = useRef<Supercluster | null>(null);
  const satelliteLayerRef = useRef<WebTileLayer | null>(null);
  const labelLayerRef = useRef<WebTileLayer | null>(null);
  const clusterLayer = useRef<GraphicsLayer | null>(null);
  const [isPointAdd, setIsPointAdd] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isSatellite, setIsSateLite] = useState(false);
  const [isAddPointPopup, setIsAddPointPopUp] = useState(false);
  const [popupCoordinates, setPopupCoordinates] =
    useState<PopupCoordinates>(null);
  const [popupPosition, setPopupPosition] = useState({
    left: "0px",
    top: "0px",
  });

  useEffect(() => {
    superclusterRef.current = new Supercluster({
      radius: 40,
      maxZoom: 20,
      minZoom: 0,
    });
    const features: Array<GeoJSON.Feature<GeoJSON.Geometry>> = [];
    superclusterRef.current.load(features);
  }, []);
  let controller: AbortController | undefined;
  interface ApiResponse {
    data: any;
    errors?: string[];
  }
  const addClustersToMap = useRef(
    debounce(
      async (
        minLat: number,
        maxLat: number,
        minLon: number,
        maxLon: number,
        zoomLevel: number
      ) => {
        if (!superclusterRef.current) return;
        if (controller) {
          controller.abort();
        }

        controller = new AbortController();

        try {
          const { data, errors }: ApiResponse = await axios.get("/api/getby", {
            params: {
              minLat,
              maxLat,
              minLon,
              maxLon,
              zoomLevel,
            },
            signal: controller.signal,
          });

          if (!errors) {
            const newCluster = data;
            if (clusterLayer.current) {
              clusterLayer.current.removeAll();
            }
            if (newCluster?.length > 0) {
              newCluster?.forEach((cluster: Cluster) => {
                const longitude = cluster?.center?.lon;
                const latitude = cluster?.center?.lat;
                const isCluster = cluster.count > 1;
                let size = 30;
                let pointCount = isCluster ? cluster.count : 1;
                if (isCluster) {
                  size = Math.min(70, Math.max(30, pointCount * 0.5));
                }

                const pinIconSvgString = ReactDOMServer.renderToStaticMarkup(
                  <SingleOneMarker
                    fillColor={"black"}
                    className="w-6 h-6 text-blue-500 "
                  />
                );
                const encodedPinIconSvg = encodeURIComponent(pinIconSvgString);
                const symbol = isCluster
                  ? new SimpleMarkerSymbol({
                      type: "simple-marker",
                      style: "circle",
                      color: true ? "#1F2836" : "#5789D7",
                      size: `${size}px`,
                      outline: {
                        color: "white",
                        width: 1.25,
                      },
                    })
                  : new PictureMarkerSymbol({
                      type: "picture-marker",
                      url:
                        "data:image/svg+xml;charset=UTF-8," + encodedPinIconSvg,
                      width: "40px",
                      height: "40px",
                    });

                const graphic = new Graphic({
                  geometry: {
                    type: "point",
                    longitude,
                    latitude,
                  } as __esri.Point,
                  symbol,
                  attributes: cluster,
                });
                if (clusterLayer.current) {
                  clusterLayer.current.add(graphic);
                }
                if (isCluster) {
                  const labelGraphic = new Graphic({
                    geometry: {
                      type: "point",
                      longitude,
                      latitude,
                    } as __esri.Point,
                    symbol: new TextSymbol({
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
                    }),
                  });
                  if (clusterLayer.current) {
                    clusterLayer.current.add(labelGraphic);
                  }
                }
              });
            }
          }
        } catch (error) {
          console.error(error);
        }
      },
      150
    )
  ).current;
  useEffect(() => {
    if (!mapDiv.current) return;
    const mapView = new MapView({
      container: mapDiv.current,
      map: new ArcGISMap({
        basemap: "streets-navigation-vector",
      }),
      zoom: 2,
      center: [-84.006, 40.7128],
      constraints: {
        minZoom: 2,
        maxZoom: 20,
        rotationEnabled: false,
      },
      ui: {
        components: [],
      },
    });

    const googleTerrainLayer = new WebTileLayer({
      urlTemplate:
        "https://mts1.google.com/vt/lyrs=p&hl=en&x={col}&y={row}&z={level}&s=Galileo",
      copyright: "Google Maps",
      opacity: 0.8,
    });
    mapView.map.add(googleTerrainLayer);
    const layer = new GraphicsLayer();
    clusterLayer.current = layer;

    mapView.on("click", (event) => {
      mapView.hitTest(event).then((response) => {
        const result = response.results.find(
          (res) => "graphic" in res
        ) as __esri.GraphicHit;

        if (result?.graphic) {
          const graphic = result.graphic;

          if (graphic.attributes?.cluster) {
            // const point = new Point({
            //   x: graphic.attributes?.coordinates[0],
            //   y: graphic.attributes?.coordinates[1],
            //   spatialReference: { wkid: 4326 },
            // });
          } else if (graphic.attributes?.text === 1) {
            console.log(graphic.attributes?.coordinates[0]);
          } else {
            setOpenSideBar(true);
          }
        }
        setIsAddPointPopUp(true);
        const point = new Point({
          x: event?.mapPoint?.longitude,
          y: event?.mapPoint?.latitude,
          spatialReference: { wkid: 4326 },
        });
        const screenPoint = mapView.toScreen(point);
        setPopupPosition({
          left: `${screenPoint.x}px`,
          top: `${screenPoint.y}px`,
        });
        setIsPointAdd(true);
        setPopupCoordinates([
          event?.mapPoint?.longitude,
          event?.mapPoint?.latitude,
        ]);
      });
    });

    mapView.map.add(layer, 5);
    loadModules([
      "esri/geometry/SpatialReference",
      "esri/geometry/support/webMercatorUtils",
    ])
      .then(([SpatialReference, webMercatorUtils]) => {
        let previousZoom = mapView.zoom;
        mapView.watch("extent", async (newExtent) => {
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
            addClustersToMap(minLat, maxLat, minLon, maxLon, currentZoom);

            previousZoom = currentZoom;
          }
        });
      })
      .catch((err) => {
        console.error("Error loading ArcGIS modules: ", err);
      });
    let isZooming = false;
    mapView.on("mouse-wheel", (event) => {
      event.stopPropagation();
      if (isZooming) return;
      isZooming = true;

      const zoomChange = event.deltaY > 0 ? -1 : 1;
      const targetZoom = mapView.zoom + zoomChange;

      mapView
        .goTo(
          { zoom: targetZoom },
          {
            duration: 400,
            easing: "ease-in-out",
          }
        )
        .finally(() => {
          isZooming = false;
        });
    });

    setView(mapView);

    // Cleanup on unmount
    return () => {
      if (mapView) {
        mapView.destroy();
      }
    };
  }, []);

  const handleViewChange = () => {
    if (!view) {
      return;
    }
    if (isAddPointPopup && popupCoordinates) {
      const point = new Point({
        x: popupCoordinates[0],
        y: popupCoordinates[1],
        spatialReference: { wkid: 4326 },
      });
      const screenPoint = view.toScreen(point);
      setPopupPosition({
        left: `${screenPoint.x}px`,
        top: `${screenPoint.y}px`,
      });
    }
  };

  useEffect(() => {
    if (!view) return;
    view.watch("extent", handleViewChange);
  }, [view, isAddPointPopup, popupCoordinates]);

  useEffect(() => {
    handleViewChange();
  }, [popupCoordinates]);

  useEffect(() => {
    if (!view) {
      return;
    }
    if (isSatellite && view) {
      if (!satelliteLayerRef.current) {
        const googleSatellite = new WebTileLayer({
          urlTemplate:
            "https://mts1.google.com/vt/lyrs=s&hl=en&x={col}&y={row}&z={level}&s=Galileo",
          copyright: "Google Maps",
        });
        const googleLabels = new WebTileLayer({
          urlTemplate:
            "https://mts1.google.com/vt/lyrs=h&hl=en&x={col}&y={row}&z={level}&s=Galileo",
          opacity: 1,
          copyright: "Google Maps",
        });
        view.map.add(googleSatellite, view?.map?.layers?.length -1);
        view.map.add(googleLabels, view?.map?.layers?.length-1);
        satelliteLayerRef.current = googleSatellite;
        labelLayerRef.current = googleLabels;
      }
    } else {
      if (satelliteLayerRef.current) {
        view.map.remove(satelliteLayerRef.current);
        satelliteLayerRef.current = null;
      }
      if (labelLayerRef.current) {
        view.map.remove(labelLayerRef.current);
        labelLayerRef.current = null;
      }
    }
  }, [isSatellite]);
  return (
    <div className="relative flex w-full h-full overflow-auto">
      {isAddPointPopup && (
        <AddPointPopUp
          setOpenSideBar={setOpenSideBar}
          onClose={() => {
            setIsAddPointPopUp(false);
          }}
          style={{ position: "absolute", ...popupPosition }}
        />
      )}
      <div
        onClick={() => setIsSateLite((pre) => !pre)}
        className={
          "absolute left-3  top-4 z-50 cursor-pointer rounded-full p-2 bg-white"
        }
      >
        <GlobeAltIcon className="w-6 h-6 text-latisGray-900 hover:text-latisSecondary-900" />
      </div>
      {!openSideBar && (
        <div
          onClick={() => {
            setOpenSideBar(true);
          }}
          className={
            "absolute right-3  top-4 z-50 cursor-pointer rounded-full p-2 bg-white"
          }
        >
          <Bars3Icon className="w-6 h-6 text-latisGray-900 hover:text-latisSecondary-900" />
        </div>
      )}

      <div className="flex-1 overflow-hidden " ref={mapDiv} />
      <SideBar
        isPointAdd={isPointAdd}
        setIsPointAdd={setIsPointAdd}
        setPopupCoordinates={setPopupCoordinates}
        popupCoordinates={popupCoordinates}
        isPopUpOpen={openSideBar}
        setIsPopUpOpen={setOpenSideBar}
      />
    </div>
  );
};

export default Map;

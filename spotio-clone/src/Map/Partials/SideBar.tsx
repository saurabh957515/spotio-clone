import _ from "lodash";
import { Tab } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  GlobeAsiaAustraliaIcon,
  LightBulbIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";
import { classNames } from "../../helper";

interface LeadData {
  city?: string;
  house_number?: string;
  street?: string;
  state?: string;
  country?: string;
  zip?: string;
  lead_owner?: string;
  lead_owner_email?: string;
  stage?: string;
  stage_updated_at?: string;
}

interface PopupCoordinates {
  0: number;
  1: number;
}

interface SideBarProps {
  setIsPointAdd: React.Dispatch<React.SetStateAction<boolean>>;
  isPointAdd: boolean;
  isPopUpOpen?: boolean;
  setIsPopUpOpen?: (value: boolean) => void;
  leadData?: LeadData;
  dataLoading?: boolean;
  setLeadData?: (data: LeadData) => void;
  popupCoordinates: PopupCoordinates;
  setPopupCoordinates: React.Dispatch<React.SetStateAction<PopupCoordinates>>;
}

const SideBar: React.FC<SideBarProps> = ({
  isPointAdd,
  isPopUpOpen = false,
  leadData = {},
  dataLoading = false,
  popupCoordinates,
  setPopupCoordinates,
}) => {
  const [selected, setSelected] = useState<number>(4);

  const getTabIcon = (type: string) => {
    switch (type) {
      case "File":
        return <GlobeAsiaAustraliaIcon className="w-6 h-6" />;
      case "Activity":
        return <UserGroupIcon className="w-6 h-6" />;
      case "Insights":
        return <LightBulbIcon className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const [data, setData] = useState({
    Name: "",
    address: "",
    zipcode: "",
    state: "",
    country: "",
    longitude: 0,
    latitude: 0,
    stageId: "",
  });

  const handleChange = (name: string, value: string) => {
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (popupCoordinates) {
      setData((pre) => ({
        ...pre,
        longitude: popupCoordinates[0],
        latitude: popupCoordinates[1],
      }));
    }
  }, [popupCoordinates]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/leads", data);
    if (response?.data?.message) {
      setData({
        Name: "",
        address: "",
        zipcode: "",
        state: "",
        country: "",
        longitude: 0,
        latitude: 0,
        stageId: "",
      });
    }
  };

  return (
    <div
      className={classNames(
        "h-full items-start shadow transition-all duration-300 z-50",
        isPopUpOpen ? "w-1/4" : "w-0"
      )}
    >
      {isPopUpOpen && dataLoading && (
        <div className="absolute flex justify-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <div className="w-12 h-12 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></div>
        </div>
      )}

      <Tab.Group
        selectedIndex={isPointAdd ? 0 : selected}
        onChange={setSelected}
        as="div"
        className={classNames(
          "h-full w-full  flex overflow-auto ",
          dataLoading ? "opacity-25" : ""
        )}
      >
        <Tab.Panels className="flex-row w-full h-full gap-8 shadow-sm grow">
          <Tab.Panel key={1} className="block w-full h-full rounded-b-lg">
            <div className="flex flex-col w-full h-full">
              <h2 className="h-16 px-4 py-4 text-xl font-semibold border-b ">
                Add New Point
              </h2>
              <div className="px-4 py-2">
                <div className="">
                  <label className="text-sm text-gray-900 capitalize">
                    Name
                  </label>
                  <input
                    className="block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg"
                    value={data?.Name}
                    onChange={(e) => handleChange("Name", e.target.value)}
                  />
                </div>
                <div className="">
                  <label className="text-sm text-gray-900 capitalize">
                    address
                  </label>
                  <input
                    className="block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg"
                    value={data?.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                  />
                </div>
                <div className="">
                  <label className="text-sm text-gray-900 capitalize">
                    zipcode
                  </label>
                  <input
                    className="block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg"
                    value={data?.zipcode}
                    onChange={(e) => handleChange("zipcode", e.target.value)}
                  />
                </div>
                <div className="">
                  <label className="text-sm text-gray-900 capitalize">
                    state
                  </label>
                  <input
                    className="block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg"
                    value={data?.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                  />
                </div>
                <div className="">
                  <label className="text-sm text-gray-900 capitalize">
                    country
                  </label>
                  <input
                    className="block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg"
                    value={data?.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                  />
                </div>
                <div className="">
                  <label className="text-sm text-gray-900 capitalize">
                    Longitude
                  </label>
                  <input
                    type="number"
                    className="block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg"
                    value={data?.longitude}
                    onChange={(e) =>
                      setPopupCoordinates((pre) => {
                        return [parseFloat(e.target.value), pre[1]];
                      })
                    }
                  />
                </div>
                <div className="">
                  <label className="text-sm text-gray-900 capitalize">
                    Latitude
                  </label>
                  <input
                    type="number"
                    className="block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg"
                    value={data?.latitude}
                    onChange={(e) =>
                      setPopupCoordinates((pre) => {
                        return [pre[0], parseFloat(e.target.value)];
                      })
                    }
                  />
                </div>
              </div>
              <div className="px-4 rounded-lg">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 text-sm leading-6 text-white duration-300 bg-blue-500 border rounded min-w-36 border-latisGray-400 focus:outline-none focus:ring-2 focus:ring-latisSecondary-900 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel key={2} className="block w-full h-full rounded-b-lg">
            <div className="flex flex-col w-full h-full">
              <h2 className="h-16 px-4 py-4 text-xl font-semibold border-b ">
                Recently Done Activity
              </h2>
              {_.isEmpty(leadData) ? (
                <div className="w-full mt-8 text-center">
                  <ExclamationTriangleIcon
                    className="w-12 h-12 mx-auto text-mlmblue-700"
                    aria-hidden="true"
                  />
                  <h3 className="mt-2 text-sm font-medium">
                    Nothing here yet.
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Click on the map to add new lead.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 px-4 overflow-auto scrollbar-hide grow sm:grid-cols-1 md:grid-cols-1">
                  <div className="p-4 bg-white rounded-md shadow">
                    <p className="text-sm font-semibold text-gray-500">City</p>
                    <p className="text-lg font-medium">
                      {leadData?.city || "N/A"}
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-md shadow">
                    <p className="text-sm font-semibold text-gray-500">
                      House Number
                    </p>
                    <p className="text-lg font-medium">
                      {leadData?.house_number || "N/A"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Tab.Panel>

          <Tab.Panel key={3} className="block w-full h-full rounded-b-lg">
            <div className="flex flex-col w-full h-full">
              <h2 className="h-16 px-4 py-4 text-xl font-semibold border-b ">
                Insights
              </h2>
            </div>
          </Tab.Panel>
        </Tab.Panels>

        <Tab.List className="flex flex-col flex-wrap items-center h-full gap-4 p-4 bg-gray-200">
          <Tab
            className={
              " p-4 text-sm flex flex-col items-center text-gray-500 hover:text-gray-900 bg-gray-100 rounded-md"
            }
            as="div"
          >
            {({ selected }) => (
              <button>
                <XMarkIcon
                  className={classNames(
                    "w-6 h-6",
                    selected ? "bg-gray-100 text-blue-700" : "text-gray-500"
                  )}
                />
              </button>
            )}
          </Tab>
          {["File", "Activity", "Insights"].map((tabType) => (
            <Tab
              className={
                " p-4 text-sm flex flex-col items-center text-gray-500 hover:text-gray-900 bg-gray-100 rounded-md"
              }
              key={tabType}
              as="div"
            >
              {({ selected }) => (
                <button
                  className={classNames(
                    "w-6 h-6",
                    selected ? "bg-gray-100 text-blue-700" : "text-gray-500"
                  )}
                >
                  {getTabIcon(tabType)}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default SideBar;

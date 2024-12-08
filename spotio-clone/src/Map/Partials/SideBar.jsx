
export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
import _ from 'lodash';
import { Tab } from '@headlessui/react';
import {
    ExclamationTriangleIcon,
    GlobeAsiaAustraliaIcon,
    LightBulbIcon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import useApi from '@/hooks/useApi';

const SideBar = ({
    isPopUpOpen = false,
    setIsPopUpOpen = () => { },
    files = [],
    setFiles = () => { },
    getFiles,
    leadData = {},
    view,
    dataLoading = false,
    setLeadData = () => { },
    setCheckFiles = () => { },
    checkFiles = () => { }
}) => {
    // const { postRoute } = useApi();
    const [file, setFile] = useState('');
    const [selected, setSelected] = useState(4);
    const [errors, setErrors] = useState({});
    const handleUpload = file => {
        setFile(file);
    };

    const onClick = async e => {
        // e.preventDefault();
        // const formData = new FormData();
        // formData.append('file', file);
        // const response = await postRoute('/canvas/upload-file', formData, {});
        // const { errors } = response;
        // if (!errors) {
        //     setFile('');
        //     getFiles();
        //     setErrors({});
        // } else {
        //     setErrors(errors);
        // }
    };

    const getTabIcon = type => {
        switch (type) {
            case 'File':
                return <GlobeAsiaAustraliaIcon className="w-6 h-6" />;
            case 'Activity':
                return <UserGroupIcon className="w-6 h-6" />;
            case 'Insights':
                return <LightBulbIcon className="w-6 h-6" />;
            default:
                break;
        }
    };

    const updatedFiles = async () => {
        const { errors, data } = await postRoute('canvas/update-map-layer', files);
        if (!errors) {
            setCheckFiles(data);
            setFiles(data);
            setErrors({});
        } else {
            setErrors(errors);
        }
    };

    const [data, setData] = useState({
        address: "",
        zipcode: '',
        state: '',
        country: '',
        longitude: '',
        latitude: '',
        stageId: '',
    })
    const handleChange = (name, value) => {
        setData(pre => ({
            ...pre,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/leads", data);
        console.log(response);
    }
    return (
        <div
            className={classNames(
                ' h-full   items-start shadow transition-all duration-300 z-50  ',
                isPopUpOpen ? 'w-1/4' : ' w-0 '
            )}
        >

            {isPopUpOpen && dataLoading && (
                <div className="absolute flex justify-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="w-12 h-12 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></div>
                </div>
            )}

            <Tab.Group
                selectedIndex={selected}
                onChange={setSelected}
                as="div"
                className={classNames(
                    'h-full w-full justify-between flex overflow-auto',
                    dataLoading ? 'opacity-25' : ''
                )}
            >
                <Tab.Panels className="flex-row w-full h-full gap-8 shadow-sm grow">
                    <Tab.Panel
                        key={1}
                        className="block w-full h-full rounded-b-lg"
                    >
                        <div className="flex flex-col w-full h-full ">
                            <h2 className="px-4 py-3 text-xl font-semibold border-b pb-9">
                                Add New Point
                            </h2>
                            <div className='px-4 py-2 '>
                                <div className=''
                                >
                                    <label className="text-sm text-gray-900 capitalize ">
                                        Name
                                    </label>
                                    <input className='block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg' value={data?.Name} onChange={(e) => handleChange('Name', e.target.value)} />
                                </div>
                                <div className=''
                                >
                                    <label className="text-sm text-gray-900 capitalize ">
                                        address
                                    </label>
                                    <input className='block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg' value={data?.address} onChange={(e) => handleChange('address', e.target.value)} />
                                </div>
                                <div className=''
                                >
                                    <label className="text-sm text-gray-900 capitalize ">
                                        zipcode
                                    </label>
                                    <input className='block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg' value={data?.zipcode} onChange={(e) => handleChange('zipcode', e.target.value)} />
                                </div>
                                <div className=''
                                >
                                    <label className="text-sm text-gray-900 capitalize ">
                                        state
                                    </label>
                                    <input className='block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg' value={data?.state} onChange={(e) => handleChange('state', e.target.value)} />
                                </div>
                                <div className=''
                                >
                                    <label className="text-sm text-gray-900 capitalize ">
                                        country
                                    </label>
                                    <input className='block w-full px-2 py-2 mt-2 text-sm text-gray-900 border rounded-lg' value={data?.country} onChange={(e) => handleChange('country', e.target.value)} />
                                </div>

                            </div>
                            <div className='px-4 rounded-lg'>
                                <button
                                    onClick={handleSubmit}
                                    className={
                                        `min-w-36  rounded border border-latisGray-400  px-4 py-2 text-sm leading-6  duration-300   focus:outline-none focus:ring-2 bg-blue-500 text-white focus:ring-latisSecondary-900 focus:ring-offset-2  $`
                                    }


                                >
                                    Save
                                </button>
                            </div>
                        </div>


                    </Tab.Panel>
                    <Tab.Panel key={2} className="block w-full h-full rounded-b-lg">
                        <div className="flex flex-col w-full h-full">
                            <h2 className="px-4 py-3 text-xl font-semibold border-b">
                                Recently Done Activity
                            </h2>
                            {_.isEmpty(leadData) ? (
                                <div className="w-full text-center">
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
                                            {leadData?.city || 'N/A'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white rounded-md shadow">
                                        <p className="text-sm font-semibold text-gray-500">
                                            House Number
                                        </p>
                                        <p className="text-lg font-medium">
                                            {leadData?.house_number || 'N/A'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white rounded-md shadow">
                                        <p className="text-sm font-semibold text-gray-500">
                                            Street
                                        </p>
                                        <p className="text-lg font-medium">
                                            {leadData?.street || 'N/A'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white rounded-md shadow">
                                        <p className="text-sm font-semibold text-gray-500">State</p>
                                        <p className="text-lg font-medium">
                                            {leadData?.state || 'N/A'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white rounded-md shadow">
                                        <p className="text-sm font-semibold text-gray-500">
                                            Country
                                        </p>
                                        <p className="text-lg font-medium">
                                            {leadData?.country || 'N/A'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white rounded-md shadow">
                                        <p className="text-sm font-semibold text-gray-500">
                                            Zip Code
                                        </p>
                                        <p className="text-lg font-medium">
                                            {leadData?.zip || 'N/A'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white rounded-md shadow">
                                        <p className="text-sm font-semibold text-gray-500">
                                            Lead Owner
                                        </p>
                                        <p className="text-lg font-medium">
                                            {leadData?.lead_owner || 'N/A'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white rounded-md shadow">
                                        <p className="text-sm font-semibold text-gray-500">
                                            Lead Owner Email
                                        </p>
                                        <p className="text-lg font-medium">
                                            {leadData?.lead_owner_email || 'N/A'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white rounded-md shadow">
                                        <p className="text-sm font-semibold text-gray-500">Stage</p>
                                        <p className="text-lg font-medium">
                                            {leadData?.stage || 'N/A'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white rounded-md shadow">
                                        <p className="text-sm font-semibold text-gray-500">
                                            Stage Updated At
                                        </p>
                                        <p className="text-lg font-medium">
                                            {leadData?.stage_updated_at || 'N/A'}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key={3} className="w-full h-full border-latisGray-400">
                        <div className="flex flex-col w-full h-full">
                            <h2 className="px-4 py-3 text-xl font-semibold border-b">
                                Insights
                            </h2>
                            <div className="w-full text-center">
                                <ExclamationTriangleIcon
                                    className="w-12 h-12 mx-auto text-mlmblue-700"
                                    aria-hidden="true"
                                />
                                <h3 className="mt-2 text-sm font-medium">
                                    No Insights to show.
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Please Add some features to show
                                </p>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel key={4} className="w-full h-full border-latisGray-400">
                        <div className="flex flex-col w-full h-full">
                            <h2 className="px-4 py-3 text-xl font-semibold border-b">
                                Files
                            </h2>

                        </div>
                    </Tab.Panel>
                </Tab.Panels>
                <Tab.List
                    className="flex flex-col items-center bg-gray-100 "
                    defaultChecked={1}
                >
                    <Tab
                        key={1}
                        onClick={e => {
                            e.preventDefault();
                            setIsPopUpOpen(false);
                            setSelected(1);
                            setLeadData({});
                        }}
                        className={({ selected }) =>
                            classNames(
                                ' flex w-24 flex-col items-center gap-y-2 px-3 py-6 text-left font-medium focus:outline-none',
                                selected
                                    ? ' bg-white text-blue-500'
                                    : 'text-gray-400'
                            )
                        }
                    >
                        <XMarkIcon
                            onClick={() => setIsPopUpOpen(false)}
                            className="w-8 cursor-pointer h-7"
                        />
                    </Tab>
                    {['Activity', 'Insights', 'File']?.map(tab => (
                        <Tab
                            key={tab}
                            className={({ selected }) =>
                                classNames(
                                    ' flex w-24 flex-col items-center gap-y-2 px-3 py-3 text-left text-sm font-medium leading-6 focus:outline-none',
                                    selected
                                        ? ' bg-white font-semibold text-blue-500'
                                        : 'text-latisGray-800 '
                                )
                            }
                        >
                            {getTabIcon(tab)}
                            {tab}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    );
};

export default SideBar;

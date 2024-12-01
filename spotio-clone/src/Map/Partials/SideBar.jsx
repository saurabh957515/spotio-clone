
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import axios from 'axios'

export default function SideBar({ open, setOpen }) {
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
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-auto">
                    <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                        <DialogPanel
                            transition
                            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <TransitionChild>
                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"

                                        className="relative text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">Close panel</span>
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <DialogTitle className="flex justify-between font-semibold text-gray-900 text-bas e">Panel title <span
                                        onClick={() => setOpen(false)}
                                    >
                                        <XMarkIcon aria-hidden="true" className="size-6" />

                                    </span></DialogTitle>
                                </div>
                                <div className="relative flex flex-col flex-1 gap-2 px-4 mt-6 sm:px-6">
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
                        </DialogPanel>
                    </div>
                </div>
            </div >
        </Dialog >
    )
}

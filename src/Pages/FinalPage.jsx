import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import { MdOutlineWidgets } from "react-icons/md";
import { FcRatings } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
function FinalPage() {
    return (
        <div className="bg-gray-300 flex items-center justify-center min-h-screen">
            <div className="relative w-[70rem] h-[90vh] my-3 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-lg p-3">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-1 sm:py-2 lg:max-w-none lg:py-3">
                        <div className='bg-gray-100 shadow-lg h-[70vh] mt-6 border border-gray-400 rounded-xl mb-2 p-3'>
                        <h2 className="text-2xl font-bold text-blue-500  text-center mb-6">Welcome To Your New Store</h2>
                        <div className='flex flex-wrap justify-evenly'>
                        <div className='w-1/2'>
                        <img
                            src='https://cdn.pixabay.com/photo/2014/04/02/11/11/welcome-305504_1280.png'
                            className='h-48 w-48 mx-auto' />
                            <p className='mt-4 text-blue-800 font font-semibold'>We have setup your store with some sample Data and default settings. 
                                This lets you get a feel of your store and the store manager. 
                                Using the steps on the right ,you can configure your store with your data and your settings.
                                 Click on the first step to start.</p>
                            </div>
                            <div className='flex flex-col border-2 border-gray-300 rounded-lg p-3 shadow-lg'>
                                <div className='flex flex-row'>
                                <FcCheckmark className=' size-6'/>
                                <p className='font-bold text-gray-500 line-through mb-2'>Choose & Customise Theme</p>
                                </div>
                                <div className='flex flex-row'>
                                <FcCheckmark className=' size-6'/>
                                <p className='font-bold text-gray-500 line-through mb-2'>Setup Shop Profile and Domain </p>
                                </div>
                                <div className='flex flex-row'>
                                <FcCheckmark className=' size-6'/>
                                <p className='font-bold text-gray-500 line-through mb-2'>Setup Categories</p>
                                </div>
                                <div className='flex flex-row'>
                                <FcCheckmark className=' size-6'/>
                                <p className='font-bold text-gray-500 line-through mb-2'>Setup Products</p>
                                </div>
                                <div className='flex flex-row'>
                                <MdOutlineWidgets className='mr-1 size-6'/>
                                <p className='font-bold text-blue-600  mb-2'>Setup Widgets</p>
                                </div>
                                <div className='flex flex-row'>
                                <FcRatings className='mr-1 size-6'/>
                                <p className='font-bold text-blue-600  mb-2'>Setup Static Pages</p>
                                </div>
                                <div className='flex flex-row'>
                                <FcGlobe className=' mr-1 size-6'/>
                                <p className='font-bold text-blue-600  mb-2'>Choose Locations</p>
                                </div>
                                <div className='flex flex-row'>
                                <FcApproval className='mr-1 size-6'/>
                                <p className='font-bold text-green-500  mb-2'>DONE</p>
                                </div>
                               
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalPage
import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
function StorePageDisplay({name , title, email , phone,logo}) {
  return (
    <div className=' p-3'>
        <div className='flex flex-wrap justify-evenly'>
      {logo ? (
        <div className='flex justify-center items-center'>
          <img className="w-20 h-20 " src={logo[0]?.url} alt="Product" />
        </div>
      ) : (
        <div className='bg-gray-200 rounded-xl w-16 h-16 mr-2 flex justify-center items-center'>
          <CiImageOn className='size-8 opacity-60' />
        </div>
      )}
      <div className='flex flex-col'>
      {name ? (
          <p className=' mt-4 mr-6 font-bold text-gray-600 mx-auto break-words text-center'>{name}</p>
      ) : (
        <div className='w-36 bg-gray-200 h-3 mt-4 mb-2 rounded-xl'></div>
      )}
      {title ? (
          <p className='mt-2 mb-2 mr-8 font-bold text-gray-500 mx-auto break-words text-center'>{title}</p>
      ) : (
        <div className='w-36 bg-gray-200 h-3 mt-4 mb-2 rounded-xl'></div>
      )}
      </div>
      </div>
      

      
      {email ? (
        <div className='mt-6'>
        <IoIosMail className='inline-block size-6 mr-2'/>
        <span className='font-semibold text-gray-500 break-words text-center'>{email}</span>
        </div>
      ) : (
        <div className='w-36 bg-gray-200 h-3 mt-4 mb-2 rounded-xl'></div>

      )}
      {phone ? (
        <div className='mt-3'>
            <MdLocalPhone className='inline-block mr-2 size-6 '/>
        <span className='font-semibold text-gray-500 break-words text-center'>{phone}</span>
        </div>
      ) : (
        <div className='w-36 bg-gray-200 h-3 mt-4 mb-2 rounded-xl'></div>

      )}
      
    </div>
  )
}

export default StorePageDisplay
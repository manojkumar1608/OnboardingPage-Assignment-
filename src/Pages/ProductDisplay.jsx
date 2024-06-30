import React from 'react'
import { CiImageOn } from "react-icons/ci";

function ProductDisplay({ image, name, description, listPrice, netPrice }) {
  return (
    <div className='w-2/3 p-3'>
      {image ? (
        <div className='flex justify-center items-center'>
          <img className="w-48 h-48" src={image?.url} alt="Product" />
        </div>
      ) : (
        <div className='bg-gray-200 rounded-xl w-48 h-44 flex justify-center items-center'>
          <CiImageOn className='size-16 opacity-60' />
        </div>
      )}
      {name ? (
          <p className='mt-4 mb-2 mr-6 font-bold mx-auto break-words text-center'>{name}</p>
      ) : (
        <div className='w-36 bg-gray-200 h-3 mt-4 mb-2 rounded-xl'></div>
      )}
      {description ? (
        <p className='font-semibold mb-6 text-gray-500 break-words text-center'>{description}</p>
      ) : (
        <div className='flex flex-wrap my-5'>
          <div className='w-8 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
          <div className='w-24 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
          <div className='w-24 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
          <div className='w-24 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
          <div className='w-24 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
          <div className='w-8 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
          <div className='w-8 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
          <div className='w-24 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
          <div className='w-24 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
        </div>
      )}
      {listPrice && netPrice ? (
        <div>
          <p className='font-semibold text-gray-500 line-through inline-block mr-3'>Rs {listPrice}</p>
          <span className='font-semibold text-gray-600'>Rs {netPrice}</span>
        </div>
      ) : (
        <div className='w-24 mr-1 bg-gray-200 h-3 mb-2 rounded-xl'></div>
      )}
    </div>
  );
}

export default ProductDisplay;

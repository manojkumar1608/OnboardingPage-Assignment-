import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Components/Input';
import { FcAddImage } from "react-icons/fc";
import StorePageDisplay from './StorePageDisplay';
import FinalPage from './FinalPage';
import AddProductPage from './AddProductPage';

function SetupStorePage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

const [storePage , setStorePage] = useState(true);
const [productPage , setProductPage] = useState(false);
const [finalPage , setfinalPage] = useState(false);

  const [storeName, setStoreName] = useState('');
  const [storeTitle, setStoreTitle] = useState('');
  const [logo, setLogo] = useState();
  const [favicon, setFavicon] = useState();
  const [checked, setDetails] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

const handleLogo = (e) => {
  const file = e.target.files[0]; 

  if (file) {
    const newImage = {
      file,
      url: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9) // Generates a unique id
    };

    setLogo([newImage]); 
    e.target.value = '';
  }
}
  
const handleFavicon = (e) => {
  const file = e.target.files[0]; 

  if (file) {
    const newImage = {
      file,
      url: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9) // Generates a unique id
    };

    setFavicon([newImage]); 
    e.target.value = '';
  }
  };
 
  const create = () => {
    setfinalPage(true);
    setStorePage(false);
  }

  const HandleBackbtn = () => {
    setProductPage(true);
    setStorePage(false);
  }

  const handleCheckbox = () => {
    setDetails(prevChecked => !prevChecked);
  };

  return (
    <>
    {
      storePage && (
    
    <div className="bg-gray-300 flex items-center justify-center min-h-screen">
      <div className="relative w-[70rem] h-[90vh] my-3 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-lg p-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-1 sm:py-2 lg:max-w-none lg:py-3">
            <h2 className="text-2xl font-bold text-orange-500 mb-2">Let's Customize Your Shopnix Store</h2>
            <h2 className="text-xl font-bold text-blue-500 rounded-lg mt-2 mb-2">Setup the Store</h2>
          </div>
          <div className='flex flex-wrap justify-between'>
            <div className='w-[37rem] h-96 overflow-y-auto h-[calc(100vh - 100px)] pr-9 '>
              <h2 className="p-0.5 px-2 text-xl font-bold bg-blue-300 rounded-lg mt-2 mb-4">Basic Details</h2>
              <form className='font-semibold' onSubmit={handleSubmit(create)}>
                <div className='mb-5 '>
                <Input
                  label="Name of the Store "
                  className="text-sm"
                  value={storeName}
                  placeholder="e.g: Electronics"
                  {...register("StoreName", {
                    required: "Store name is required",onChange: (e) => setStoreName(e.target.value)
                  })}
                />
                 {errors.StoreName && (
            <p className="text-red-500 text-sm ">{errors.StoreName.message}</p>)}
            </div>
            <div className='mb-5 '>
                <Input
                  label="Store Title"
                  className="text-sm"
                  value={storeTitle}
                  placeholder="e.g: Gadgets65"
                  {...register("StoreTitle", {
                    required: "Store Title is required", onChange: (e) => setStoreTitle(e.target.value)
                  })}
                />
                 {errors.StoreTitle && (
            <p className="text-red-500 text-sm ">{errors.StoreTitle.message}</p>)}
            </div>
               <div className='flex flex-row justify-between'>
                  <label className=" ml-1">Add Logo</label>
                  <label className=" mr-12">Add Favicon</label>
               </div>
                <div className='flex flex-wrap justify-between mt-3 '>
                <div className="relative h-[6.5rem] w-[18rem] bg-gray-200 rounded-lg border-2 border-gray-400 border-dashed">
                  <Input
                    type="file"
                    accept="image/jpeg, image/png, image/webp"
                    {...register('logo')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleLogo}
                    
                  />
                  <label
                    htmlFor="file-input"
                    className="flex items-center justify-center w-full h-full cursor-pointer"
                  >
                    <FcAddImage className="text-4xl" />
                  </label>
                <p className='text-xs text-gray-400 mt-3 font-medium mb-1'>Supported formats JPG, PNG, WEBP</p>
                <p className='text-xs text-gray-400 mb-3 font-medium'>Image height-100px width-300px</p>
                </div>
                <div className=' flex justify-end flex-col '>
                  <div className='flex justify-center'>

                  {favicon ? (
          <div className="relative flex flex-row items-center">
            <img
              className="h-24 w-24 mr-2 rounded-lg"
              src={favicon[0].url}
              alt="Favicon preview"
            />
            <div className="relative h-24 w-24">
              <input
                type="file"
                accept="image/jpeg, image/png, image/webp"
                {...register('favicon')}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFavicon}
              />
              <label
                htmlFor="file-input"
                className="flex items-center justify-center w-full h-full cursor-pointer"
              >
                <FcAddImage className="text-3xl" />
              </label>
            </div>
          </div>
        ) : (
          <div className="relative h-24 w-24 bg-gray-200 rounded-lg border-2 border-gray-400 border-dashed mb-3">
            <input
              type="file"
              accept="image/jpeg, image/png, image/webp"
              {...register('favicon')}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFavicon}
            />
            <label
              htmlFor="file-input"
              className="flex items-center justify-center w-full h-full cursor-pointer"
            >
              <FcAddImage className="text-3xl" />
            </label>
          </div>
        )}
                </div>
                  <p className='text-xs text-gray-400 mt-3 font-medium mb-1'>Supported image format only</p>
                  <p className='text-xs text-gray-400 mb-3 font-medium'>Image height-32px width-32px</p>
                </div>
                </div>
              <div className='flex flex-wrap mt-6 mx-1'>
                    <input
                      onClick={handleCheckbox}
                      className='accent-blue-500 hover:cursor-pointer size-5 mt-0.1'
                      type="checkbox"
                    />
                    <p className='text-gray-500 ml-2 text-sm'>Add Support Details</p>
                  </div>
                  {checked &&
                  <div className='font-semibold mt-6'>
                    <Input
                    label = "Support Email address"
                      type="text"
                      className="mb-5 text-gray-500"
                      placeholder="e.g: abc@example.com"
                      value = {email}
                      {...register("email", {
                        required: false, onChange : (e) => setEmail(e.target.value)
                      })}
                      
                      />
                    <Input
                    label = "Support Phone Number"
                    type="text"
                    className="mb-3 text-gray-500"
                    placeholder="e.g: 9123456780"
                      value = {phone}
                      {...register("phone", {
                        required: false, onChange: (e) => setPhone(e.target.value)
                      })}
                      
                    />
                    </div>
                  }
                  <div className='flex justify-center mt-10'>
                    <button onClick={HandleBackbtn} className='button mx-2 bg-gray-300 text-gray-600'>Back</button>
                    <button type='submit' className='button mx-2 bg-blue-500 text-white'
                    >Next</button>
                  </div>
                    </form>
            </div>
            <div className='w-[25rem] flex justify-center border border-gray-300 p-3 rounded-xl'>
            <StorePageDisplay name={storeName} logo={logo} title={storeTitle} email={email} phone ={phone}  />
            </div>
          </div>
          
        </div>
      </div>
    </div>
                )
              }

              {
                productPage &&
                <AddProductPage/>
              }
              {
                finalPage &&
                <FinalPage/>
              }
              </>
  )
}

export default SetupStorePage
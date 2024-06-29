import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import Input from '../Components/Input';
import ReactQuill from 'react-quill';
import { FcAddImage } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import 'react-quill/dist/quill.snow.css';

function InfoForm() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [images, setImages] = useState([]);
  const [checked, setChecked] = useState(false);

  const [listPrice, setListPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [gstRate, setGstRate] = useState('');
  const [shippingCharges, setShippingCharges] = useState('');
  const [netPrice, setNetPrice] = useState(0);

  useEffect(() => {
    const calculateNetPrice = () => {
      const listPriceNum = parseFloat(listPrice) || 0;
      const discountPercentageNum = parseFloat(discountPercentage) || 0;
      const gstRateNum = parseFloat(gstRate) || 0;
      const shippingChargesNum = parseFloat(shippingCharges) || 0;

      const discount = (listPriceNum * discountPercentageNum) / 100;
      const gst = (listPriceNum * gstRateNum) / 100;
      const net = listPriceNum - discount + gst + shippingChargesNum;
      setNetPrice(net);
    };

    calculateNetPrice();
  }, [listPrice, discountPercentage, gstRate, shippingCharges]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      file,
      url: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9) // Generate a unique id
    }));
    setImages(prevImages => [...prevImages, ...newImages]);
    e.target.value = '';
  };

  const create = () => {
    // Form submission logic
  };

  const isDisabled = images.length >= 4;

  const handleDelete = (id) => {
    setImages(images.filter(image => image.id !== id));
  };

  const handleCheckbox = () => {
    setChecked(prevChecked => !prevChecked);
  };
const handleship = (e) => {
  console.log("kk")
  setDiscountPercentage(e.target.value)
}
  return (
    <div className="bg-gray-300 flex items-center justify-center min-h-screen">
      <div className="relative w-[70rem] h-[90vh] my-3 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-lg p-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-1 sm:py-2 lg:max-w-none lg:py-3">
            <h2 className="text-2xl font-bold text-orange-500 mb-2">Let's Customize Your Shopnix Store</h2>
            <h2 className="text-xl font-bold text-blue-500 rounded-lg mt-2 mb-2">Add Your First product</h2>
          </div>
          <div className='flex flex-wrap justify-between '>
            <div className='w-1/2 h-96 overflow-y-auto h-[calc(100vh - 100px)] pr-3 '>
              <h2 className="p-0.5 px-2 text-xl font-bold bg-blue-300 rounded-lg mt-2 mb-4">Basic Details</h2>
              <form className='font-semibold' onSubmit={handleSubmit(create)}>
                <Input
                  label="Product Name"
                  className="mb-5"
                  placeholder="e.g: Samsung S24"
                  {...register("ProductName", {
                    required: "Product Name is required",
                  })}
                />
                <label>Product Description</label>
                <Controller
                  name="productDescription"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Product Description is required" }}
                  render={({ field }) => (
                    <ReactQuill
                      className="custom-quill-editor font-normal mb-4 mt-1 shadow-sm shadow-gray-400"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Enter product description here..."
                    />
                  )}
                />
                <div className="flex flex-col my-2">
                  <input
                    type="file"
                    id="imageInput"
                    className="hidden"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={isDisabled}
                  />
                  <label className="mb-1 ml-1">Add Image(s)</label>
                  <p className='text-xs text-gray-400 mb-3'>Upload your product images here. Supported formats jpeg, png, webp. You can add up to 4 images.</p>
                  <div className="flex flex-wrap">
                    {images.map((image, index) => (
                      <div className='flex flex-col' key={image.id}>
                        <img
                          src={image.url}
                          alt={`Preview ${index}`}
                          className="w-28 h-28 object-cover rounded-md border border-gray-300 m-1"
                        />
                        <MdDeleteForever onClick={() => handleDelete(image.id)} className='cursor-pointer size-4' />
                      </div>
                    ))}
                    <label
                      htmlFor="imageInput"
                      className={`flex items-center justify-center ml-2 border-2 border-gray-600 border-dashed h-28 w-28 bg-gray-200 rounded-lg cursor-pointer mb-4 ${isDisabled ? "opacity-50 cursor-no-drop" : "cursor-pointer"}`}
                    >
                      <FcAddImage className="text-4xl" />
                    </label>
                  </div>

                  <Input
                    type="text"
                    label="SKU code"
                  />
                  <p className='text-xs text-gray-400 mt-1 mb-3'>A unique number/name for your product Eg: PROD001. This is not shown to the user.</p>

                  <div className='flex flex-wrap my-3 mx-1'>
                    <input
                      onClick={handleCheckbox}
                      className='accent-blue-500 hover:cursor-pointer size-5 mt-0.1'
                      type="checkbox"
                    />
                    <p className='text-gray-500 ml-2 text-sm'>This product has an HSN/SAC code</p>
                  </div>

                  {checked &&
                    <Input
                      type="text"
                      className="text-gray-500"
                      placeholder="Enter HSN/SAC Code"
                    />
                  }
                </div>
                <hr className='my-8 border-gray-300 border-t-2'></hr>
                <h2 className="p-0.5 px-2 text-xl font-bold bg-blue-300 rounded-lg mt-2 mb-4">Pricing Details</h2>
                <div className='flex flex-wrap my-7 mx-1'>
                    <input
                      className='accent-blue-500 hover:cursor-pointer size-5 mt-0.1'
                      type="checkbox"
                    />
                    <p className='text-gray-500 ml-2 text-sm'>Price inclusive of GST</p>
                  </div>
                <div className='flex flex-wrap justify-between '>
                  <div className='w-56'>
                    <Input
                      type="number"
                      label="List Prices"
                      className="mb-8"
                      placeholder="e.g: 100"
                      value={listPrice}
                      
                      {...register("ListPrices", {
                        required: "List Price is required",onChange:(e) => setListPrice(e.target.value)
                      })}
                    />
                  </div>
                  <div className='w-56'>
                    <Input
                      type="number"
                      label="Discount Percentage"
                      className="mb-8"
                      placeholder="e.g: 40"
                      value={discountPercentage}
                      
                      {...register("discountPercentage", { 
                        required: "Discount Percentage is required",onChange:(e) => setDiscountPercentage(e.target.value)
                      })}
                    />
                  </div>
                  <div className='w-56'>
                    <Input
                      type="number"
                      label="GST rate"
                      className="mb-8"
                      placeholder="e.g: 18"
                      value={gstRate}
                      
                      {...register("GSTrate", {
                        required: "GST rate is required",onChange:(e) => setGstRate(e.target.value)
                      })}
                    />
                  </div>
                  <div className='w-56'>
                    <Input
                      type="number"
                      label="Shipping Charges (if any)"
                      className="mb-8"
                      placeholder="e.g: 20"
                      value={shippingCharges}
                      
                      {...register("ShippingCharges", {
                        required: "Shipping Charges is required",onChange:(e) => setShippingCharges(e.target.value)
                      })}
                    />
                  </div>
                  <div className='w-56'>
                    <Input
                      type="number"
                      label="Net Price"
                      className="mb-8"
                      value={netPrice}
                      readOnly
                      {...register("NetValue", {
                        required: false,
                      })}
                    />
                  </div>
                  <div className='w-56'>
                    <Input
                      type="number"
                      label="Stock level"
                      className="mb-8"
                      placeholder="e.g: 2"
                      {...register("Stocklevel", {
                        required: "Stock level is required",
                      })}
                    />
                  </div>
                </div>

              </form>
            </div>
            <div className='w-48 right-10 top-40 sticky h-44 bg-gray-500'></div>
          </div>
          <button type='submit'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default InfoForm;

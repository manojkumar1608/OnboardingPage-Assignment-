import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import Input from '../Components/Input';
import ReactQuill from 'react-quill';
import { FcAddImage } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import 'react-quill/dist/quill.snow.css';
import ProductDisplay from './ProductDisplay';
import AddCategoryPage from './AddCategoryPage'
import SetupStorePage from './SetupStorePage';

function AddProductPage() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const [productPage, setProductPage] = useState(true)
  const [categoryPage, setCategoryPage] = useState(false)
  const [storePage, setStorePage] = useState(false)


  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
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
      id: Math.random().toString(36).substr(2, 9) // Generates a unique id
    }));
    setImages(prevImages => [...prevImages, ...newImages]);
    e.target.value = '';
  };

  const create = () => {
    setStorePage(true);
    setProductPage(false);
  };
  const HandleBackbtn = () => {
    setCategoryPage(true);
    setProductPage(false);
  };

  const isDisabled = images.length >= 4;

  const handleDelete = (id) => {
    setImages(images.filter(image => image.id !== id));
  };

  const handleCheckbox = () => {
    setChecked(prevChecked => !prevChecked);
  };

  const stripHtml = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  return (
    <>
    { productPage && (

      <div className="bg-gray-300 flex items-center justify-center min-h-screen">
        <div className="relative w-[70rem] h-[90vh] my-3 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-lg p-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-1 sm:py-2 lg:max-w-none lg:py-3">
              <h2 className="text-2xl font-bold text-orange-500 mb-2">Let's Customize Your Shopnix Store</h2>
              <h2 className="text-xl font-bold text-blue-500 rounded-lg mt-2 mb-2">Add Your First product</h2>
            </div>
            <div className='flex flex-wrap justify-between'>
              <div className='w-[35rem] h-96 overflow-y-auto h-[calc(100vh - 100px)] pr-9 '>
                <h2 className="p-0.5 px-2 text-xl font-bold bg-blue-300 rounded-lg mt-2 mb-4">Basic Details</h2>
                <form className='font-semibold' onSubmit={handleSubmit(create)}>
                  <div className='mb-5'>
                  <Input
                    label="Product Name"
                    className=" text-sm"
                    value={productName}
                    placeholder="e.g: Samsung S24"
                    {...register("ProductName", {
                      required: "Product Name is required", onChange: (e) => setProductName(e.target.value)
                    })}
                  />
                   {errors.ProductName && (
            <p className="text-red-500 text-sm ">{errors.ProductName.message}</p>)}
            </div>
<div className='mb-4 mt-1'>
                  <label>Product Description</label>
                  <Controller
                    name="productDescription"
                    control={control}
                    defaultValue=""
                    value={productDescription}
                    rules={{ required: "Product Description is required", onChange: (e) => console.log(e) }}
                    render={({ field }) => (
                      <ReactQuill
                        className="custom-quill-editor font-normal  shadow-sm shadow-gray-400"
                        value={field.value}
                        onChange={(content) => {
                          field.onChange(content);
                          const plainText = stripHtml(content)
                          setProductDescription(plainText)
                        }}
                        placeholder="Enter product description here..."
                      />
                    )}
                  />
                  {errors.productDescription && (
            <p className="text-red-500 text-sm ">{errors.productDescription.message}</p>)}
            </div>

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
                  <div className='flex flex-wrap justify-between'>
                    <div className='w-56 mb-8'>
                      <Input
                        type="number"
                        label="List Prices"
                        className=" font-normal  text-sm"
                        placeholder="e.g: 100"
                        value={listPrice}

                        {...register("ListPrices", {
                          required: "List Price is required", onChange: (e) => setListPrice(e.target.value)
                        })}
                      />
                       {errors.ListPrices && (
            <p className="text-red-500 text-sm ">{errors.ListPrices.message}</p>)}
                    </div>
                    <div className='w-56 mb-8 '>
                      <Input
                        type="number"
                        label="Discount Percentage (%)"
                        className="font-normal  text-sm"
                        placeholder="e.g: 40"
                        value={discountPercentage}
                        {...register("discountPercentage", {
                          required: "Discount Percentage is required", onChange: (e) => setDiscountPercentage(e.target.value)
                        })}
                      />
                      {errors.discountPercentage && (
            <p className="text-red-500 text-sm ">{errors.discountPercentage.message}</p>)}
                    </div>
                    <div className='w-56 mb-8'>
                      <Input
                        type="number"
                        label="GST rate (%)"
                        className=" font-normal text-sm"
                        placeholder="e.g: 18"
                        value={gstRate}

                        {...register("GSTrate", {
                          required: "GST rate is required", onChange: (e) => setGstRate(e.target.value)
                        })}
                      />
                       {errors.GSTrate && (
            <p className="text-red-500 text-sm ">{errors.GSTrate.message}</p>)}
                    </div>
                    <div className='w-56 mb-8 '>
                      <Input
                        type="number"
                        label="Shipping Charges (if any)"
                        className="font-normal text-sm"
                        placeholder="e.g: 20"
                        value={shippingCharges}

                        {...register("ShippingCharges", {
                          required: "Shipping Charges is required", onChange: (e) => setShippingCharges(e.target.value)
                        })}
                      />
                      {errors.ShippingCharges && (
            <p className="text-red-500 text-sm ">{errors.ShippingCharges.message}</p>)}
                    </div>
                    <div className='w-56'>
                      <Input
                        type="number"
                        label="Net Price"
                        className="mb-8 font-normal text-sm"
                        value={netPrice}
                        readOnly
                        {...register("NetValue", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className='w-56 mb-8 '>
                      <Input
                        type="number"
                        label="Stock level"
                        className="font-normal text-sm "
                        placeholder="e.g: 2"
                        {...register("Stocklevel", {
                          required: "Stock level is required",
                        })}
                      />
                       {errors.Stocklevel && (
            <p className="text-red-500 text-sm ">{errors.Stocklevel.message}</p>)}
                    </div>
                  </div>
                  <div className='flex justify-center mt-10'>
                    <button onClick={HandleBackbtn} className='button mx-2 bg-gray-300 text-gray-600'>Back</button>
                    <button className='button mx-2 bg-blue-500 text-white'
                    >Next</button>
                  </div>
                </form>
              </div>
              <div className='w-[25rem] flex justify-center border border-gray-300 p-3 rounded-xl '>
                <ProductDisplay name={productName} image={images[0]} description={productDescription} netPrice={netPrice} listPrice={listPrice} />
              </div>
            </div>
          </div>
        </div>
      </div>)
}
{
  categoryPage && 
  <AddCategoryPage/>
}
{
  storePage && 
  <SetupStorePage/>
}
  </>
 )
                      
}

export default AddProductPage;

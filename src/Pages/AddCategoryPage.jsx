
import React, { useState } from 'react'
import Input from '../Components/Input'
import ThemePage from './ThemePage'
import AddProductPage from './AddProductPage'

function AddCategoryPage() {
  const [categoryPage , setCategoryPage] = useState(true)
  const [themePage , setThemePage] = useState(false)
  const [productPage , setProductPage] = useState(false)
  const [productType, setProductType] = useState("")
  const HandleProductType = (event) => {
    setProductType(event.target.value)
  } 
  const HandleCategoryPage = () => {
    setProductPage(true)
    setCategoryPage(false)
  }
  const HandleBackbtn = () => {
    setThemePage(true)
    setCategoryPage(false)
  }

  return (
    <>
    {
    categoryPage &&(
    <div className="bg-gray-300 flex items-center justify-center min-h-screen">
      <div className=" relative my-3 w-[70rem] h-[90vh] bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-lg p-3">

        <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-1 sm:py-2 lg:max-w-none lg:py-3">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">Let's Customize Your Shopnix Store</h2>
          </div>
          <div className='flex flex-wrap justify-between'>
          <form className='flex flex-col font-bold mr-4'>
            <h2 className="w-[20.5em] px-3 bg-blue-200 rounded-lg p-1 text-xl font-bold text-gray-900 mb-6 ">Add a Type, Category and Sub-Category</h2>
            <Input
              className="font-normal mb-4"
              label=" Product type *"
              type="text"
              value={productType}
              onChange={HandleProductType}
              placeholder="e.g: Electronics"
            />

            <Input
              className="font-normal mb-4"
              label=" Category (optional)"
              type="text"
              placeholder="e.g: Mobiles"
            />

            <Input
              className="font-normal mb-4"
              label=" Sub-Category (optional)"
              type="text"
              placeholder="e.g: Iphone"
            />
          </form>

        <div className='flex flex-col ml-4 mr-14 p-4 bg-blue-200 font-bold rounded-xl'>
          <p className='border border-gray-600 bg-orange-500 rounded-lg h-14 w-36 text-center flex items-center justify-center'>Product type</p>
          <div className='flex justify-center items-center w-36 '>
              <span className=' text-7xl'>&#x2193;</span>
            </div>

          <p className='border border-gray-600 bg-orange-500 rounded-lg h-14 w-36 text-center flex items-center justify-center'> Category</p>
          <div className=' flex justify-center items-center w-36'>
              <span className='text-7xl'>&#x2193;</span>
            </div>
          <div className='flex flex-row'>
            <p className='border border-gray-600 bg-orange-500 rounded-lg h-14 w-36 text-center flex items-center justify-center'>Sub-Category </p>
            
            <div className='flex justify-center items-center h-10'>
              <span className='text-7xl'>&#x2192;</span>
            </div>
            <p className='border border-gray-600 bg-blue-500 rounded-lg h-14 w-36 text-center flex items-center justify-center'>Product</p>
          </div>
        </div>
        </div>
        </div>
        <div className='absolute bottom-1 left-96 '>
          <button onClick={HandleBackbtn} className='button mx-2 '>Back</button>
          <button onClick={HandleCategoryPage}
          className={`button mx-2 ${productType === "" ? 'disabled:opacity-50 text-gray-400 bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          disabled={productType === ""}>Next</button>
          
        </div>
      </div>
    </div>)
}
    {
      productPage && 
      <AddProductPage/>
    }
    {
      themePage && 
      <ThemePage/>
    }
    </>

  )
}

export default AddCategoryPage
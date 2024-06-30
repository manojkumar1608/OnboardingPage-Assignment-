import React, { useState } from 'react'
import '../App.css'
import AddCategoryPage from './AddCategoryPage';
function ThemePage() {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(null);
  let [themePage, setThemePage] = useState(true)
  const themes = [
    {
      name: 'Shoes theme',
      imageSrc: 'https://cdn.dribbble.com/userupload/5832070/file/original-41f45ae148747834799c2c0586bc2d05.jpg?resize=1504x1128',
      imageAlt: 'Shoes Theme ',
    },
    {
      name: 'Electronics Theme',
      imageSrc: 'https://cdn.dribbble.com/users/3531878/screenshots/18950054/media/ad158ef3af9ba2fe847399101a4d4299.jpg?resize=1200x900&vertical=center',
      imageAlt: 'Electronics Theme',
    },
    {
      name: 'Furniture theme',
      imageSrc: 'https://cdn.dribbble.com/userupload/12732084/file/original-8f5429840faf7816cba6609f01225162.jpg?resize=1504x1222',
      imageAlt: 'Furniture Theme',
    },
  ]
  const handleClick = (index) => {
    setSelectedThemeIndex(index === selectedThemeIndex ? null : index);
  };
  const HandleNext = () => {
setThemePage(false);

  }


  return themePage ?  (
    <div className="bg-gray-300 flex items-center justify-center min-h-screen">
      <div className="relative w-[70rem] my-3 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-lg p-3">

        <div className="">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-1 sm:py-2 lg:max-w-none lg:py-3">
              <h2 className="text-2xl font-bold text-orange-500 mb-2">Let's Customize Your Shopnix Store</h2>
              <h2 className="text-xl font-bold text-blue-500 mt-2 mb-4">Apply a theme</h2>

              <div className="mt-1 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {themes.map((themes, index) => (
                  <div key={themes.name} className="group relative rounded-xl p-0.5 border-gray-300 border-2">
                    <div className="relative w-full rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={themes.imageSrc}
                        alt={themes.imageAlt}
                        className="w-full h-56 object-cover object-center"
                      />
                    </div>
                    <h3 className="mb-4 text-lg text-center font-bold text-gray-900">
                      {themes.name}
                    </h3>
                    <div className='flex justify-center items-center mt-1 mb-3'>
                      <button
                        onClick={() => handleClick(index)}
                        className={`button ${selectedThemeIndex === index
                          ? ' bg-blue-500 text-white'
                          : ''
                          }`}
                      >
                        {selectedThemeIndex === index ? 'Applied' : 'Choose'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className='text-gray-500 my-2'>Note: You can explore more themes from the admin panel</p>
              <div className='flex justify-end'>
                <button  onClick={HandleNext}
                  className={`button bg-blue-500 text-white font-semibold py-1.5 px-4 rounded-lg focus:outline-none focus:shadow-outline ${selectedThemeIndex !== null ? ''  : 'opacity-50 cursor-not-allowed'}`}
                  disabled={!selectedThemeIndex}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  ):(
    <AddCategoryPage/>
  )
}

export default ThemePage
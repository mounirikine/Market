import React, { useState } from "react";
import Logo from "../../assets/images/logo-3.png.webp";
import HeaderTop from "./HeaderTop";
const Header = () => {
  const [primaryColor, setPrimaryColor] = useState("bg-blue-800");
  return (
    <>
      <header className="">
        <HeaderTop />
        <hr className="w-11/12 mx-auto" />
        <div className="flex justify-between items-center px-20 py-5">
          <div className="w-2/12">
            <img src={Logo} alt="" />
          </div>

          <div className="w-6/12">
            <form>
              <div class="flex">
                <label
                  for="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  All categories{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logos
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="relative w-full">
                  <input
                    type="search"
                    className="block p-2.5 w-full outline-none z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 "
                    placeholder="Search Mockups, Logos, Design Templates..."
                  />
                  <button className="absolute top-0 end-0 px-2  text-sm font-medium h-full text-white  bg-blue-700 rounded-e-lg border-4 border-indigo-600   ">
                    <i class="ri-search-line text-lg "></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-4/12 px-5 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div><i class="ri-heart-line text-3xl border p-3 rounded-full hover:bg-blue-700 hover:text-white cursor-pointer"></i></div>
                    <div>
                        <p className="text-sm font-bold">Wishlist</p>
                        <h2>My Items</h2>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div><i class="ri-user-line text-3xl border p-3 rounded-full  hover:bg-blue-700 hover:text-white cursor-pointer"></i></div>
                    <div>
                        <p className="text-sm font-bold">Sign In</p>
                        <h2>Account</h2>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div><i class="ri-shopping-cart-2-fill text-3xl border p-3 rounded-full bg-orange-500 text-white  hover:bg-blue-700 hover:text-white cursor-pointer"></i></div>
                    <div>
                        <p className="text-sm font-bold">$200.00</p>
                        <h2>Total</h2>
                    </div>
                </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

// import React, { useState } from 'react';
// import HeaderTop from './HeaderTop';
// import Logo from '../../assets/images/logo-3.png.webp';

// const Header = () => {
//   const [primaryColor , setPrimaryColor] = useState('bg-blue-800')

//   return (
//     <>
//       <HeaderTop />
//       <hr className='w-11/12 mx-auto'/>

//       <header className='flex justify-between items-center px-20 py-4'>
//         <div className="w-2/12">
//           <img src={Logo} alt="" />
//         </div>
//         <div className="w-8/12">
//           <div className={`flex items-center ${primaryColor} p-4 rounded-md`}>
//             <div className="all-categories">
//               <div className="select-wrapper">
//                 <select className="select border p-2 mx-3 rounded-md ">
//                   <option value="">All Categories</option>
//                   <option value="">Smartphones</option>
//                   <option value="">Computers</option>
//                   <option value="">Laptops</option>
//                   <option value="">Camera</option>
//                   <option value="">Watches</option>
//                   <option value="">Lights</option>
//                   <option value="">Air conditioner</option>
//                 </select>
//               </div>
//             </div>
//             <div className="categories-wrapper">
//               <form action="#" className="flex items-center w-[630px]  outline-none">
//                 <input
//                   placeholder="Enter Your keyword"
//                   type="text"
//                   className=" p-2 rounded-l-md flex-grow"
//                 />
//                 <button

//                   className="  rounded-r-md px-7  py-2 border bg-orange-500	border-none text-white "
//                 >
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="w-3/12 flex px-5 cursor-pointer  items-center justify-center gap-6">
//           <span className='flex items-center '>
//             <i class="ri-heart-line  text-2xl"></i>
//             {/* <span className='border-r-2 border-black pr-8'>Wishlist</span> */}
//           </span>
//           <span className='cursor-pointer items-center flex justify-center '>
//             <i className="ri-shopping-cart-line text-2xl"></i>
//             <p className='bg-red-500 px-2 rounded-full text-white'>2</p>
//           </span>
//           <span className='cursor-pointer'>
//           <i class="ri-group-line text-2xl"></i>
//           </span>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;

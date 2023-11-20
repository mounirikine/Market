import React, { useState } from "react";
import "./Home.css";
import banner from "../assets/images/banner.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";

import Sidebar from "../Components/sidebar/Sidebar";
import Hero from "../Components/hero/Hero";
import TopProduct from "../Components/topProduct/TopProduct";
import Footer from "../Components/footer/Footer";
import Brands from "../Components/brands/Brands";
import NewsLetter from "../Components/newsLetter/NewsLetter";
import BestSelling from "../Components/BestSelling/BestSelling";
import First from "../Components/First/First";

const Home = () => {
  const [primaryColor, setPrimaryColor] = useState("bg-blue-800");

  return (
    <>
      <section className="px-10 flex gap-10">
        <Sidebar />

        <Hero />
      </section>
      <section className="px-20 py-10 flex justify-between gap-10">
        <First />
      </section>
      <section>
        <TopProduct />
      </section>
      {/* publication section */}
      <section className="text-center py-10">
        
      </section>
      <BestSelling />
      <section>
        <div className="grid grid-cols-3 px-20 py-10">
          <div class="mx-auto mt-11 w-96 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              class="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
                <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div class="mx-auto mt-11 w-96 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              class="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
                <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div class="mx-auto mt-11 w-96 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              class="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
                <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div class="mx-auto mt-11 w-96 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              class="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
                <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div class="mx-auto mt-11 w-96 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              class="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
                <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div class="mx-auto mt-11 w-96 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              class="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
                <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Brands />
      </section>
      <section className={`flex items-center justify-center gap-6 text-white py-20 ${primaryColor}`}>
        <NewsLetter />
      </section>
      <Footer />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroimg from "../../assets/images/slider0.jpg";

const Hero = () => {
  const [primaryColor, setPrimaryColor] = useState("bg-blue-800");

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Enable automatic sliding
    autoplaySpeed: 3000,   // Set the time (in milliseconds) between each slide
  };
  
  return (
    <>
      <div className="w-9/12 shadow-xl">
        <div className="shadow-xl">
          <ul
            className={`flex justify-around px-10 font-semibold items-center ${primaryColor} text-white py-2`}
          >
            <li className="dropdown">
              HOME <i className="ri-arrow-drop-down-line"></i>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Fashion Style 2</a>
                </li>
                <li>
                  <a href="#">Fruits</a>
                </li>
                <li>
                  <a href="#">Book</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Electronics style 2</a>
                </li>
                <li>
                  <a href="#">Food and Drink</a>
                </li>
                <li>
                  <a href="#">Furniture</a>
                </li>
                <li>
                  <a href="#">Handicraft</a>
                </li>
                <li>
                  <a href="#">Smart Watch</a>
                </li>
                <li>
                  <a href="#">Sport</a>
                </li>
                {/* Add other submenu items here */}
              </ul>
            </li>
            <li className="dropdown">
              PAGES <i className="ri-arrow-drop-down-line"></i>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Fashion Style 2</a>
                </li>
                <li>
                  <a href="#">Fruits</a>
                </li>
                <li>
                  <a href="#">Book</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Electronics style 2</a>
                </li>
                <li>
                  <a href="#">Food and Drink</a>
                </li>
                <li>
                  <a href="#">Furniture</a>
                </li>
                <li>
                  <a href="#">Handicraft</a>
                </li>
                <li>
                  <a href="#">Smart Watch</a>
                </li>
                <li>
                  <a href="#">Sport</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              SHOP <i className="ri-arrow-drop-down-line"></i>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Fashion Style 2</a>
                </li>
                <li>
                  <a href="#">Fruits</a>
                </li>
                <li>
                  <a href="#">Book</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Electronics style 2</a>
                </li>
                <li>
                  <a href="#">Food and Drink</a>
                </li>
                <li>
                  <a href="#">Furniture</a>
                </li>
                <li>
                  <a href="#">Handicraft</a>
                </li>
                <li>
                  <a href="#">Smart Watch</a>
                </li>
                <li>
                  <a href="#">Sport</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              BLOG <i className="ri-arrow-drop-down-line"></i>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Fashion Style 2</a>
                </li>
                <li>
                  <a href="#">Fruits</a>
                </li>
                <li>
                  <a href="#">Book</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Electronics style 2</a>
                </li>
                <li>
                  <a href="#">Food and Drink</a>
                </li>
                <li>
                  <a href="#">Furniture</a>
                </li>
                <li>
                  <a href="#">Handicraft</a>
                </li>
                <li>
                  <a href="#">Smart Watch</a>
                </li>
                <li>
                  <a href="#">Sport</a>
                </li>
              </ul>
            </li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div className="flex bg">
          <div
            className="w-full px-10 py-32"
            style={{
              backgroundImage: `url(${heroimg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Slider {...sliderSettings}>
              <div className="w-full py-20">
                <h1 className="text-6xl font-bold">
                  Invention of Design Platform
                </h1>
                <p className="w-[100%] text-lg text-gray py-7">
                  Best Product With Warranty
                </p>
                <button
                  className={`${primaryColor} text-white my-10 py-2 px-10 rounded-sm`}
                >
                  BUY NOW
                </button>
              </div>

              {/* Slide 2 */}
              <div className="py-20  w-full">
                <h1 className="text-6xl font-bold">
                  Welcom To Us <br />
                  Your Best Online Store Is Here 
                </h1>
                <p className="w-[100%] text-lg text-gray py-7">
                  Best Product With Warranty
                </p>
                <button
                  className={`${primaryColor} text-white my-10 py-2 px-10 rounded-sm`}
                >
                  BUY NOW
                </button>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

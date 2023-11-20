import React from 'react'
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/7.png";
import img7 from "../../assets/images/8.png";


const BestSelling = () => {
  return (
    <>
    <h1 className="text-3xl font-bold py-10">—— BEST SELLING ——</h1>
        <div className="flex gap-2 px-4">
          {/* Product 1 */}
          <div className="relative w-4/12 ">
            <div className="group">
              <div className="hidden transition-all duration-1000 ease-in-out group-hover:grid absolute top-0 end-0">
                {/* Add content for product 1 hover state */}
              </div>
              <img src={img1} alt="Product 1" className="" />
            </div>

            <div className="-translate-y-48 py-1">
              <p className="text-center">start</p>
              <h1 className="text-center text-3xl py-1 font-bold">
                desktop C27f551
              </h1>
              <p className="text-center font-lg">Headphone</p>
              <h2 className="text-center py-5 text-3xl">$133.00</h2>
            </div>
          </div>

          {/* Products 2-7 */}
          <div className="w-8/12 grid grid-cols-3 gap-1 ">
            {[img2, img3, img4, img5, img6, img7].map((img, index) => (
              <div key={index} className="group ">
                <div className="hidden transition-all duration-1000 ease-in-out group-hover:grid absolute top-0 end-0">
                  <div className="grid">
                    <button className="px-4 py-3 bg-white text-black transition duration-150 ease-in-out hover:color-yellow border">
                      <i className="ri-heart-line"></i>
                    </button>
                    <button className="px-4 py-3 bg-white text-black transition duration-150 ease-in-out hover:color-yellow border">
                      <i className="ri-shopping-cart-line"></i>
                    </button>
                  </div>
                </div>
                <img src={img} alt={`Product ${index + 2}`} />
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default BestSelling
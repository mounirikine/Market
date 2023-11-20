import React from "react";
import "./TopProduct.css";


const TopProduct = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold py-10">
          {" "}
          —— TOP PRODUCTS ——{" "}
        </h1>
        <div className="flex justify-center items-center gap-10  ">
          <button className="py-3 px-8 border rounded-full border-2 hover:bg-black hover:text-white">
            FICTION
          </button>
          <button className="py-3 px-8 border rounded-full border-2 hover:bg-black hover:text-white">
            SATIRE
          </button>
          <button className="py-3 px-8 border rounded-full border-2 hover:bg-black hover:text-white">
            ANTHOLOGIES
          </button>
        </div>
      </div>

      <div>
        <div>
          <div className="product-style">
            <div
              className="flex  justify-center items-center gap-10 py-10"
              role="tablist"
            >
              <a className="font-somibold  " href="#">
                ALL
              </a>
              <a className="font-somibold  " href="#">
                WOMAN
              </a>
              <a className="font-somibold  " href="#">
                MEN
              </a>
              <a className="font-somibold  " href="#">
                ACCESSSORIES
              </a>
              <a className="font-somibold  " href="#">
                KIDS
              </a>
            </div>

            <div className="flex justify-center items-center">
              {/* <div classNameName="w-1/12 px-3">
          <ul>
            here we Will  pas a slide menu category
            </ul>
          </div> */}
              <div className="w-12/12">
                <div className="grid-cols-4 grid px-32 py-5 gap-10">
                  <div className="product-card">
                    <img
                      src="https://htmldemo.net/ezone/ezone/assets/img/product/electro/1.jpg"
                      alt="Product"
                    />
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                    <div className="product-info">
                      <h3>First Air Headphone Black</h3>
                      <div className="product-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <p className="product-category">Headphone</p>
                      <p className="old-price">$129.99</p>
                      <p className="product-price">$99.99</p>

                      {/* <p className="product-stock">In Stock</p> */}
                    </div>
                  </div>
                  <div className="product-card">
                    <img
                      src="https://htmldemo.net/ezone/ezone/assets/img/product/electro/1.jpg"
                      alt="Product"
                    />
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                    <div className="product-info">
                      <h3>First Air Headphone Black</h3>
                      <div className="product-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <p className="product-category">Headphone</p>
                      <p className="old-price">$129.99</p>
                      <p className="product-price">$99.99</p>

                      {/* <p className="product-stock">In Stock</p> */}
                    </div>
                  </div>
                  <div className="product-card">
                    <img
                      src="https://htmldemo.net/ezone/ezone/assets/img/product/electro/1.jpg"
                      alt="Product"
                    />
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                    <div className="product-info">
                      <h3>First Air Headphone Black</h3>
                      <div className="product-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <p className="product-category">Headphone</p>
                      <p className="old-price">$129.99</p>
                      <p className="product-price">$99.99</p>

                      {/* <p className="product-stock">In Stock</p> */}
                    </div>
                  </div>
                  <div className="product-card">
                    <img
                      src="https://htmldemo.net/ezone/ezone/assets/img/product/electro/1.jpg"
                      alt="Product"
                    />
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                    <div className="product-info">
                      <h3>First Air Headphone Black</h3>
                      <div className="product-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <p className="product-category">Headphone</p>
                      <p className="old-price">$129.99</p>
                      <p className="product-price">$99.99</p>

                      {/* <p className="product-stock">In Stock</p> */}
                    </div>
                  </div>
                  <div className="product-card">
                    <img
                      src="https://htmldemo.net/ezone/ezone/assets/img/product/electro/1.jpg"
                      alt="Product"
                    />
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                    <div className="product-info">
                      <h3>First Air Headphone Black</h3>
                      <div className="product-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <p className="product-category">Headphone</p>
                      <p className="old-price">$129.99</p>
                      <p className="product-price">$99.99</p>

                      {/* <p className="product-stock">In Stock</p> */}
                    </div>
                  </div>
                  {/* Repeat the above structure for the remaining product cards */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full py-10">
        <button className="bg-orange-500  px-14 text-base font-semibold text-white  py-2 rounded-xl">
          View More
        </button>
      </div>
    </>
  );
};

export default TopProduct;

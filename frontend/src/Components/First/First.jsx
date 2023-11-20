import React from 'react';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import the Slider styles
import 'slick-carousel/slick/slick-theme.css'; // Import the Slider theme styles
import './First.css';

import item1 from '../../assets/images/first/item-1.png'
import item2 from '../../assets/images/first/item-2.png'
import item3 from '../../assets/images/first/item-3.png'
import item4 from '../../assets/images/first/item-4.png'
import item5 from '../../assets/images/first/item-5.png'
import item6 from '../../assets/images/first/item-6.png'
import item7 from '../../assets/images/first/item-7.png'
import item8 from '../../assets/images/first/item-8.png'
import item9 from '../../assets/images/first/item-9.png'
import item10 from '../../assets/images/first/item-10.png'
import item11 from '../../assets/images/first/item-11.png'
import item12 from '../../assets/images/first/item-12.png'
import item13 from '../../assets/images/first/item-13.png'
import item14 from '../../assets/images/first/item-14.png'
import item15 from '../../assets/images/first/item-15.png'
import item16 from '../../assets/images/first/item-16.png'

const First = () => {
  // Define slider settings
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5, // Show 5 products at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  // List of product images
  const productImages = [item1, item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16 /* ...add other item images here... */];

  return (
    <>
 <div className="w-full">
  <Slider {...sliderSettings}>
      
      {productImages.map((item, index) => (
        
      <div key={index} className="product-card "> 
        <img src={item} alt={`Product ${index + 1}`} />
        <div className="product-actions">
          <a href="u" className="action-btn">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <a href="u" className="action-btn">
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
        </div>
      </div>
      
    ))}
     
  </Slider>
</div>

    </>
  );
};

export default First;



// import React from 'react'
// import './First.css'
// import item1 from '../../assets/images/first/item-1.png'
// import item2 from '../../assets/images/first/item-2.png'
// import item3 from '../../assets/images/first/item-3.png'
// import item4 from '../../assets/images/first/item-4.png'
// import item5 from '../../assets/images/first/item-5.png'
// import item6 from '../../assets/images/first/item-6.png'
// import item7 from '../../assets/images/first/item-7.png'
// import item8 from '../../assets/images/first/item-8.png'
// import item9 from '../../assets/images/first/item-9.png'
// import item10 from '../../assets/images/first/item-10.png'
// import item11 from '../../assets/images/first/item-11.png'
// import item12 from '../../assets/images/first/item-12.png'
// import item13 from '../../assets/images/first/item-13.png'
// import item14 from '../../assets/images/first/item-14.png'
// import item15 from '../../assets/images/first/item-15.png'
// import item16 from '../../assets/images/first/item-16.png'

// const First = () => {
//   return (
//     <>
//         <div className="flex">
//         <div className="product-card">
//                     <img
//                       src={item1}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
//         <div className="product-card">
//                     <img
//                       src={item2}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
//         <div className="product-card">
//                     <img
//                       src={item3}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
//         <div className="product-card">
//                     <img
//                       src={item4}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
//         <div className="product-card">
//                     <img
//                       src={item5}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
//         <div className="product-card">
//                     <img
//                       src={item6}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
//         <div className="product-card">
//                     <img
//                       src={item7}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
//         <div className="product-card">
//                     <img
//                       src={item8}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
//         <div className="product-card">
//                     <img
//                       src={item9}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
//         <div className="product-card">
//                     <img
//                       src={item10}
//                       alt="Product"
//                     />
//                     <div className="product-actions">
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-shopping-cart"></i>
//                       </a>
//                       <a href="#" className="action-btn">
//                         <i className="fas fa-heart"></i>
//                       </a>
//                     </div>
//                     <div className="product-info">
//                       <h3>First Air Headphone Black</h3>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                       </div>
//                       <p className="product-category">Headphone</p>
//                       <p className="old-price">$129.99</p>
//                       <p className="product-price">$99.99</p>

//                       {/* <p className="product-stock">In Stock</p> */}
//                     </div>
//         </div>
        
//         </div>
//     </>
//   )
// }

// export default First
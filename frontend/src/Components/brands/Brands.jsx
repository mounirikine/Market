import React from 'react'
import m1 from '../../assets/images/brands/asus.png'
import m2 from '../../assets/images/brands/dng.png'
import m3 from '../../assets/images/brands/hurley.png'
import m4 from '../../assets/images/brands/oppo.png'
import m5 from '../../assets/images/brands/samsung.png'
import m6 from '../../assets/images/brands/zara.png'

const Brands = () => {
  return (
    <>

    <div className="flex justify-between items-center px-20 py-10">
        <img src={m1} alt="" srcset="" />
        <img src={m2} alt="" srcset="" />
        <img src={m3} alt="" srcset="" />
        <img src={m4} alt="" srcset="" />
        <img src={m5} alt="" srcset="" />
        <img src={m6} alt="" srcset="" />
    </div>

    </>
  )
}

export default Brands
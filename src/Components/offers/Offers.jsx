import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/p4_img.jpg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST DELLERS PRODUCT</p>
           
        </div>
        <div className="offers-right">
           <img src={exclusive_image} alt=''/>
        </div>
    </div>
  )
}
export default Offers
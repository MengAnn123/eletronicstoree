import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import Hero_image from '../Assets/Hero_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="new">
                <p>new</p>
            </div>
               <p>product</p>
               <p>for you</p>
            </div>
            
        </div>
        <div className="hero-right">
            <img src={Hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero
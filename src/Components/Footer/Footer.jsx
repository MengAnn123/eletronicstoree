import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.jpg'
import instagram from '../Assets/instagram.png'
import facebook from '../Assets/facebook.png'
import telegram from '../Assets/telegram.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt='' width={50}/>
            <p>Electronic Store</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram} alt=''width={30}/>
            </div>
            <div className="footer-icon-container">
                <img src={facebook} alt='' width={30} />
            </div>
            <div className="footer-icon-container">
                <img src={telegram} alt='' width={30} />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 Electronic Store All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer
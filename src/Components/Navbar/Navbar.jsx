import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const[menu,setMenu] = useState("shop");
    const {getTotalItem} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" width={50}/>
            <p>Electronic Store</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("samsung")}}><Link style={{textDecoration:'none'}} to='/samsung'>Samsung</Link>{menu==="samsung"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("apple")}}><Link style={{textDecoration:'none'}} to='apple'>Apple</Link>{menu==="apple"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("xiaomi")}}><Link style={{textDecoration:'none'}} to='xiaomi'>Xiaomi</Link>{menu==="xiaomi"?<hr/>:<></>}</li>
        </ul>
    <div className="nav-login-cart">
        {localStorage.getItem('authToken')
        ?<button onClick={()=>{localStorage.removeItem('authToken');window.location.replace('/')}}>Log Out</button>
        :<Link to='/login'><button>Login</button></Link>}
        
        <Link to='/cart'><img src={cart_icon} alt='' width={50}/></Link>
        <div className="nav-cart-count">{getTotalItem()}</div>
    </div>
    </div>
  )
}

export default Navbar
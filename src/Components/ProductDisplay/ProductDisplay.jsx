import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdislay-left">
            <div className="productdisplay-img-list">
                <img src={product.image}alt="" />
                <img src={product.image}alt="" />
                <img src={product.image}alt="" />              
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.Name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt="" />
                <p>(200)</p>
            </div>
            <div className="productdisplay-right-prices">
                ${product.price}
            </div>
            <div className="productdisplay-right-detail">
                {product.display} <br/>
                {product.memory}
            </div>
            
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
            
        </div>
    </div>
  )
}

export default ProductDisplay
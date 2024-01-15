import React, { useContext } from 'react';
import './CSS/Shopcategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const Shopcategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Show 1-12</span> out of product
                </p>
                
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} 
                        id={item.id} image={item.image} name={item.Name} price={item.price} />;
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default Shopcategory;

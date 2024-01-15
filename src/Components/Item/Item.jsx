import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}>
                <div className="card" style={{ width: '18rem', display:'flex'}}>
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">${props.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Item;



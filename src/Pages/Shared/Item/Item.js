import React from 'react';
import './Item.css'
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { name, price, supplier, quantity, description, img } = item;
    const navigate = useNavigate()
    const navigateToItemUpdate = id => {
        navigate(`/home/${id}`);
    }
    return (
        <div className='product my-5'>
            <div>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className='product-info'>
                <div className='my-auto'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Price: {price}$</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className='my-auto'>
                    <div className="btn update-btn" onClick={() => navigateToItemUpdate(item._id)}>Update</div>
                </div>
            </div>
        </div>
    );
};

export default Item;
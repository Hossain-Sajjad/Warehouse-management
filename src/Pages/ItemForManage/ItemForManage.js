import React from 'react';

const Item = ({ item, handleItemDelete }) => {
    const { name, price, supplier, quantity, description, img } = item;

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
                    <div className="btn update-btn" onClick={() => handleItemDelete(item._id)}>Delete Item</div>
                </div>
            </div>
        </div >
    );
};

export default Item;
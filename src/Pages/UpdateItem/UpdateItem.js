import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState('');
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])

    const handleDelivered = () => {
        const quantity = parseInt(item.quantity) - 1;
        const updatedItem = { quantity };
        const url = `http://localhost:5000/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Quantity Reduced')
            })
    }

    const handleUpdateItem = event => {
        event.preventDefault();
        const quantity = parseInt(event.target.quantity.value) + parseInt(item.quantity);
        const updatedItem = { quantity };
        const url = `http://localhost:5000/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('updated successfully')
                event.target.reset();
            })
    }

    return (
        <div className='container'>
            <div className='product my-5'>
                <div>
                    <img className='img-fluid' src={item.img} alt="" />
                </div>
                <div className='product-info'>
                    <div className='my-auto'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Supplier: {item.supplier}</p>
                        <p>Price: {item.price}$</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                    <div className='my-auto'>
                        <div className="btn update-btn" onClick={handleDelivered}>Delivered</div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <form onSubmit={handleUpdateItem}>
                    <input name='quantity' type="text" placeholder='quantity' required />
                    <input className='addBtn' type="submit" value="Update Quantity" />
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
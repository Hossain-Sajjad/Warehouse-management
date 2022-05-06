import React from 'react';
import './AddItems.css'

const AddItems = () => {
    const handleSubmitItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const img = event.target.img.value;
        const item = { name, description, price, quantity, supplier, img };
        console.log(item);
        fetch("https://damp-brushlands-34790.herokuapp.com/item", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        event.target.reset();
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmitItem}>
                <input name='name' type="text" placeholder='name' required />
                <input name='description' type="text" placeholder='description' required />
                <input name='price' type="text" placeholder='price' required />
                <input name='supplier' type="text" placeholder='supplier' required />
                <input name='quantity' type="text" placeholder='quantity' required />
                <input name='img' type="text" placeholder='image url' required />
                <input className='addBtn' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;
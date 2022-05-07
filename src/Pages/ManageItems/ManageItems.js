import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemForManage from '../ItemForManage/ItemForManage'

const ManageItems = () => {
    const navigate = useNavigate()

    const [items, setIteams] = useState('');
    useEffect(() => {
        fetch("https://damp-brushlands-34790.herokuapp.com/items")
            .then(res => res.json())
            .then(data => setIteams(data))
    }, [])

    const handleItemDelete = id => {
        const proceed = window.confirm("are you sure?");
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setIteams(remaining);
                    }
                })
        }
    }

    const navigateToAddNew = id => {
        navigate(`/additem`);
    }
    return (
        <div className='container'>
            <h1>Total Items: {items.length}</h1>
            {

                items && items.map(item =>
                    <ItemForManage
                        key={item._id}
                        item={item}
                        handleItemDelete={handleItemDelete}
                    ></ItemForManage>)

            }
            <div className='my-auto'>
                <div className="btn update-btn" onClick={() => navigateToAddNew()}>Add New Item</div>
            </div>
        </div>
    );
};

export default ManageItems;
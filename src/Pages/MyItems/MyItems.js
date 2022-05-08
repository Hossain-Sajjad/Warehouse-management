import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Item from '../ItemForManage/ItemForManage';

const MyItems = () => {
    const [items, setIteams] = useState();
    const [user] = useAuthState(auth);
    const email = [user?.email]

    fetch("http://localhost:5000/myitems", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(email)
    })
        .then(res => res.json())
        .then(data => {
            setIteams(data);
        })
    return (
        <div className='container'>
            <h1>My Items: </h1>
            {

                items && items.map(item =>
                    <Item
                        key={item._id}
                        item={item}
                    ></Item>
                )

            }

        </div>
    );
};

export default MyItems;
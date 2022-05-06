import React, { useEffect, useState } from 'react';
import Item from '../../Shared/Item/Item';

const Items = () => {
    const [items, setIteams] = useState('');
    useEffect(() => {
        fetch("https://damp-brushlands-34790.herokuapp.com/items")
            .then(res => res.json())
            .then(data => setIteams(data))
    }, [])
    return (
        <div className='container'>
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

export default Items;
import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h1>Updating Items</h1>
        </div>
    );
};

export default UpdateItem;
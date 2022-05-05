import React from 'react';
import TopSection from '../TopSection/TopSection';
import './Home.css'

const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <div className='container mt-5'>
                <div className='product'>
                    <div>
                        <img className='img-fluid' src="https://i.ibb.co/kKLJrcv/istockphoto-1323983873-170667a.webp" alt="" />
                    </div>
                    <div className='product-info'>
                        <div className='my-auto'>
                            <h3>IPhone 13 Series</h3>
                            <p>Supplier: HS traders</p>
                            <p>A latest stoke from Taiwan</p>
                            <p>Quantity: 50</p>
                        </div>
                        <div className='my-auto'>
                            <div className="btn btn-primary">Update</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
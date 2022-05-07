import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Social.css'

const Social = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }
    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <p className='px-2 text-white'>or</p>
            </div>
            {errorElement}
            <div className='w-50 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='google-btn w-50 d-block mx-auto'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Social;
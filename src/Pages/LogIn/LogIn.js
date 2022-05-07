import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Shared/Social/Social';
import "./LogIn.css";

const Register = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }

    const onSubmit = (data) => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input placeholder="email" {...register("email", { required: "Please enter your mail before submit" })} />
                {errors.email && <p className='text-danger'>{errors.email.message}</p>}


                <label htmlFor="password">Password</label>
                <input placeholder="password" type="password" {...register("password", { required: "enter your password" })} />
                {errors.password && <p className='text-danger'>{errors.password.message}</p>}


                <input className='login-btn' type="Submit" defaultValue="Login" />
            </form>
            <div className='mt-4'>
                <p className='w-50 mx-auto text-white'>Don't have a account? <Link to='/register' className='text-decoration-none text-danger ms-2'>Register</Link></p>
            </div>
            <Social></Social>
        </div>
    );
};

export default Register;
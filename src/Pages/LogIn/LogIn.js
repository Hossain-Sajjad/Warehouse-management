import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
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

    if (user) {
        navigate('/');
    }

    const onSubmit = (data) => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input placeholder="email" {...register("email", { required: "Please enter your mail before submit" })} />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}


            <label htmlFor="password">Password</label>
            <input placeholder="password" type="password" {...register("password", { required: "enter your password" })} />
            {errors.password && <p className='text-danger'>{errors.password.message}</p>}


            <input className='login-btn' type="Submit" defaultValue="Login" />
        </form>
    );
};

export default Register;
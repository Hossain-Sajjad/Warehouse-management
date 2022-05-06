import React from 'react';
import { useForm } from "react-hook-form";
import "./LogIn.css";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input placeholder="email" {...register("email", { required: true })} />

            <label htmlFor="password">Password</label>
            <input placeholder="password" type="password" {...register("password", { required: true })} />

            <input className='login-btn' type="Submit" value="Log In" />
        </form>
    );
};

export default Register;
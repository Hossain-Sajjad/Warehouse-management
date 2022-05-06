import React from 'react';
import { useForm } from "react-hook-form";
import "./LogIn.css";

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input placeholder="email" {...register("email", { required: "Please enter your mail before submit" })} />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}


            <label htmlFor="password">Password</label>
            <input placeholder="password" type="password" {...register("password", { required: "enter your password" })} />
            {errors.password && <p className='text-danger'>{errors.password.message}</p>}


            <input className='login-btn' type="Submit" defaultValue="Log In" />
        </form>
    );
};

export default Register;
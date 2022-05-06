import React from 'react';
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input placeholder="name" {...register("name", { required: true })} />

            <label htmlFor="email">Email</label>
            <input placeholder="email" {...register("email", { required: true })} />

            <label htmlFor="password">Password</label>
            <input placeholder="password" type="password" {...register("password", { required: true })} />

            <input className='register-btn' type="Submit" value="Register" />
        </form>
    );
};

export default Register;
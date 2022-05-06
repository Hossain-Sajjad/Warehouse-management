import React from 'react';
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input placeholder="name" {...register("name", { required: "Please enter your name" })} />
            {errors.name && <p className='text-danger'>{errors.name.message}</p>}

            <label htmlFor="email">Email</label>
            <input placeholder="email" {...register("email", {
                required: "Please enter your mail before submit",
                pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address"
                }
            })} />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}

            <label htmlFor="password">Password</label>
            <input placeholder="password" type="password" {...register("password", { required: "enter a strong password" })} />
            {errors.password && <p className='text-danger'>{errors.password.message}</p>}

            <input className='register-btn' type="Submit" defaultValue="Register" />
        </form>
    );
};

export default Register;
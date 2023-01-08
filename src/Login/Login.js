import React from 'react';
import { json } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {
            email, password
        }
        if (email && password) {
            alert("Login Successful")
        } else {
            alert("User Input Invalid")
        }
        console.log(user)
        localStorage.setItem("user", JSON.stringify(user))
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center space-y-5 my-5 border shadow-lg lg:w-1/2 px-6 lg:px-10 mx-auto py-20 rounded-lg'>
                <h1 className='text-4xl text-black'>Login</h1>
                <input type="text" placeholder="Email" name='email' className="input input-bordered w-full" />
                <input type="text" placeholder="Password" name='password' className="input input-bordered w-full" />
                <button className='btn btn-primary w-full'>Login</button>
            </form>
        </div>
    );
};

export default Login;
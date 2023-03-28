import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../Assets/Icon/logo.svg"

const Header = () => {

    const menuItems = <>
        <li><NavLink className="text-black" to="/">Home</NavLink></li>
        <li><NavLink className="text-black" to="/courses">All Courses</NavLink></li>
        <li><NavLink className="text-black" to="/about">About Us</NavLink></li>
        <li><NavLink className="text-black" to="/login">Login</NavLink></li>
        <li><NavLink className="text-black" to="/contact">Contact Us</NavLink></li>
    </>



    return (
        <div className="navbar bg-gray-50 shadow-2xl md:flex md:justify-between md:px-16">
            <div className="navbar-star">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex items-center space-x-2'>
                    <img className='w-14' src={logo} alt="BrandLogo" srcset="" />
                    <li className='list-none font-bold uppercase'><span className='text-cyan-600'>rain</span><span className='text-blue-400'>drop</span> <br /> <span className='text-green-600'>academy</span></li>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;
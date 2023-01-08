import React from 'react';

const Card = ({ info }) => {
    const { title, description, icon } = info;
    return (
        <div className="card text-center mx-auto bg-white shadow-2xl transform hover:bg-gradient-to-r from-violet-700 via-blue-800 to-blue-500 duration-2000 delay-50  text-black h-80 cursor-pointer">
            <figure className='w-24 mx-auto pt-12'>
                <img className='bg-gradient-to-r from-violet-700  to-blue-800 p-5 rounded-lg' src={icon} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';
import image2 from '../../Assets/Images/sideIMage2.jpg'
import Rating from './Rating';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen px-6 sm:px-8 md:px-14 mx-auto pb-12 bg-white shadow-2xl">
                <div className="flex flex-col lg:flex-row-reverse">
                    <div className="flex justify-center rounded-lg w-full">
                        <img className='lg:h-full w-full rounded' src={image2} alt='banner' />
                    </div>
                    <div className='lg:pr-20 md:mt-12 mx-auto'>
                        <div>
                            <h1 className="text-3xl sm:text-5xl mt-12 md:mt-0 md:text-6xl font-bold text-black">Large educational programs</h1>
                            <div className='flex mt-16 space-x-2'>
                                <p className='text-sky-400'>Our course is rated excellent by over 42,000 people </p>
                                <Rating></Rating>
                            </div>
                            <p className='mt-6 text-gray-900'>Today, more than 48,000 people have already studied at our university in various fields: programming, photography, marketing and management</p>
                        </div>
                        <div className='flex space-x-10 mt-12'>
                            <button className="btn text-black lg:btn-lg bg-gradient-to-r from-green-400 to-blue-500 border-none">Try for free</button>
                            <button className="btn text-black btn-outline lg:btn-lg border-orange-400 hover:bg-gradient-to-r from-pink-500 to-yellow-500">See Pricing plans</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
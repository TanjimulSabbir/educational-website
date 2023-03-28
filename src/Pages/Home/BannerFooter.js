import React from 'react';
import bannerFooterImg from '../../Assets/Images/BannerFooter.png'

const BannerFooter = () => {
    return (
        <div>
            <div className="hero min-h-screen px-6 sm:px-8 md:px-14 mx-auto pb-12 bg-blue-300 shadow-xl">
                <div className="flex flex-col-reverse lg:flex-row-reverse justify-between">
                    <div className='lg:px-20 mx-auto'>
                        <div>
                            <h1 className="text-3xl sm:text-2xl mt-12 md:mt-0 md:text-3xl font-bold text-black">Learn And Get A Profession Online</h1>
                            <div className='flex mt-16 space-x-2'>
                                <p className='text-black'>Our course is rated excellent by over 42,000 people </p>

                            </div>
                            <p className='mt-6 text-black'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna, eget mattis turpis aliquam a. In sagittis bibendum consequat. Quisque porta volutpat ligula sit amet varius</p>
                        </div>
                        <div className='flex space-x-10 mt-14'>
                            <button className="btn text-white border-none btn-outline bg-gradient-to-r from-pink-500 to-yellow-500 transition duration-150 hover:text-white">See Pricing plans</button>

                        </div>
                    </div>
                    <div className="flex justify-center rounded-lg w-full border-cyan-500 mt-14 lg:mt-0">
                        <img className='lg:h-full w-full rounded' src={bannerFooterImg} alt='banner' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerFooter;
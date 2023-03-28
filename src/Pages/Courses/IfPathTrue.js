import React from 'react';

const IfPathTrue = () => {
    return (
        <div>
            <div className="hero min-h-screen px-6 sm:px-8 md:px-14 mx-auto shadow bg-white">
                <div className='lg:px-20 mx-auto'>
                    <div className='space-y-8'>
                        <h1 className="text-xl mt-12 md:mt-0 md:text-5xl font-bold text-black pb-10">Large selection of courses</h1>
                        <p className='mt-10 text-black'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna, eget mattis turpis aliquam a. In sagittis bibendum consequat. Quisque porta volutpat ligula sit amet varius. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor provident quidem natus beatae praesentium officia totam vel ipsum, ducimus ipsam animi nostrum mollitia id tenetur nihil delectus optio, culpa corporis maxime. Libero nulla repudiandae enim quis, reiciendis expedita esse laboriosam cum tenetur consequuntur beatae dolorum dolorem, ad corporis perspiciatis vitae optio doloremque eveniet. Veniam, eaque sunt, nostrum nisi tempora ut natus obcaecati corrupti assumenda sed error deserunt? Dolorem, consequuntur. Animi, necessitatibus quasi tempore est molestias porro corporis tenetur praesentium nihil?</p>
                    </div>
                    <div className='flex space-x-10 mt-14 justify-center'>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered bg-transparent md:w-96" />
                                <button className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IfPathTrue;
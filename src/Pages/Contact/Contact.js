import React from 'react';
import ContactCard from './ContactCards';

const Contact = () => {

    return (
        <div className="hero min-h-screen px-6 sm:px-8 md:px-14 mx-auto shadow bg-blue-100">
            <div className='lg:px-20 mx-auto'>
                <div className='space-y-8'>
                    <h1 className="text-3xl sm:text-5xl mt-12 md:mt-0 md:text-6xl font-bold  text-blue-500 text-center pb-10">Contact Us</h1>
                    <p className='mt-10 text-black'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna, eget mattis turpis aliquam a. In sagittis bibendum consequat. Quisque porta volutpat ligula sit amet varius. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor provident quidem natus beatae praesentium officia totam vel ipsum, ducimus ipsam animi nostrum mollitia id tenetur nihil delectus optio, culpa corporis maxime. Libero nulla repudiandae enim quis, reiciendis expedita esse laboriosam cum tenetur consequuntur beatae dolorum dolorem, ad corporis perspiciatis vitae optio doloremque eveniet. Veniam, eaque sunt, nostrum nisi tempora ut natus obcaecati corrupti assumenda sed error deserunt? Dolorem, consequuntur. Animi, necessitatibus quasi tempore est molestias porro corporis tenetur praesentium nihil?</p>
                </div>
                <div className='flex space-x-10 mt-14 justify-center'>
                    <ContactCard></ContactCard>
                </div>
            </div>

        </div>
    );
};

export default Contact;
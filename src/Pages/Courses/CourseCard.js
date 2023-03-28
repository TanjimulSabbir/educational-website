import React from 'react';
import Rating from '../Home/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CourseCard = ({ course, leng }) => {
    const { courseName, teacher, duration, courseFee } = course;
    console.log(leng)
    return (
        <div className='card border border-gray-300 p-10 shadow-xl mt-6'>
            <div className='flex justify-center items-center space-x-4 my-6'>
                <div className='bg-green-600 flex items-center text-center justify-center rounded text-white p-8'>
                    <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                </div>
                <h2 className='text-xl text-black'>{courseName}</h2>
            </div>
            <div className='space-y-2'>
                <Rating></Rating>
                <p className='text-black'>{teacher}</p>
                <p className='text-black font-bold'>{duration}</p>
            </div>

            <h2 className='bg-blue-50 mt-8 py-4 rounded text-center text-black font-medium'>{courseFee}</h2>
            <Link className='btn mt-10 text-center bg-emerald-500 hover:bg-transparent border-emerald-500 uppercase space-x-2 text-black' to="/login"><p>Sign Up for a Course </p>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
        </div>
    );
};

export default CourseCard;
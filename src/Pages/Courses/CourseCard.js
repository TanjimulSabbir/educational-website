import React from 'react';
import Rating from '../Home/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CourseCard = ({ course, leng }) => {
    const { courseName, teacher, duration, courseFee } = course;
    return (
        <div className='card p-10 bg-white shadow-xl mt-6'>
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

            <h3 className='bg-blue-50 mt-8 py-4 rounded text-center text-black'>{courseFee}</h3>
            <Link className='btn btn-outline mt-10 text-center border hover:bg-green-500 uppercase space-x-2 text-black' to="/login">
                <p>Sign Up for a Course </p>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
        </div>
    );
};

export default CourseCard;
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { useLocation, useNavigate } from 'react-router-dom';

const CourseCards = () => {
    const [courses, setCourses] = useState([])
    const [LoadMore, setLoadMore] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.split("/")[1]
    useEffect(() => {
        fetch("courses.json")
            .then((res) => res.json())
            .then(data => {
                return setCourses(data)
            })
    }, [])
    return (
        <div>
            <div className='grid bg-blue-50 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 py-16'>
                {
                    courses.map(course => {
                        if (LoadMore) {
                            if (LoadMore) {
                                return navigate("/courses")
                            }
                        }
                        else {
                            if (course._id < 4) {
                                return <CourseCard key={course._id} course={course}></CourseCard>
                            }
                        }
                        if (pathname === "courses") {
                            return <CourseCard key={course._id} course={course}></CourseCard>
                        }
                    })
                }
            </div>
            {
                pathname === "courses" ? "" : <div className={`flex bg-blue-50 pb-6 justify-center`}>
                    <button className='btn btn-outline bg-violet-500 text-black border-none' onClick={() => setLoadMore(true)}>Learn More...</button>
                </div>
            }
        </div >
    );
};

export default CourseCards;
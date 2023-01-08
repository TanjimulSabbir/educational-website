import React from 'react';
import CourseCards from './CourseCards';
import { useLocation } from 'react-router-dom';
import IfPathTrue from './IfPathTrue';

const Courses = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1]

  return (
    <div className='shadow-lg'>
      {
        pathname === "courses" ? <IfPathTrue></IfPathTrue> : ""
      }
      <div className={`mx-auto px-12 md:px-24 shadow-2xl bg-gray-100 border-none p-20 ${pathname === "courses" ? "" : "pt-16"}`}>
        <div className='text-center'>
          <h2 className='text-5xl text-black font-bold'>Our Popular Courses</h2>
          <p className='text-gray-900 mt-8 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi asperiores inventore molestiae, cum, atque odio aspernatur aliquid culpa dolore eum animi beatae aut eveniet. Nam odio aliquam repellat nemo aspernatur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi non fugit itaque quam dolorum architecto cupiditate repudiandae aperiam reiciendis magni. Fuga qui, ipsum facilis obcaecati aliquid cumque asperiores voluptate excepturi at, similique praesentium a ex autem quo. Ad eaque repudiandae atque ex praesentium dignissimos, corrupti soluta temporibus, provident excepturi unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, minus illo ab vel blanditiis fugit iure assumenda dolorum distinctio earum error nihil ratione, odio quo eos laborum enim veniam quae reprehenderit non mollitia tenetur expedita? Distinctio adipisci pariatur cumque, molestiae aperiam similique exercitationem delectus esse minima tenetur, consectetur in eos!</p>
        </div>
        <div className='grid grid-cols-4 mt-8 text-center gap-2 md:gap-8 lg:gap-12'>
          {
            pathname === "courses" ? <button className='btn btn-secondary'>All</button> : ""
          }
          <p className="btn btn-primary">Computer Programming</p>
          <p className="btn btn-primary">Artificial Intelligence</p>
          <p className="btn btn-primary">Game Development</p>
          <p className="btn btn-primary">Mangement</p>
          <p className="btn btn-primary">Art</p>
          <p className="btn btn-primary">Digital Marketing</p>

          {
            pathname === "courses" ?
              <>
                <p className="btn btn-outline text-black"> Object Oriented Programming</p>
                <p className="btn btn-outline text-black"> Blockchain Technology</p>
                <p className="btn btn-outline text-black"> Software Engineering</p>
                <p className="btn btn-outline text-black">Programming with Python </p>
                <p className="btn btn-outline text-black"> Data Science</p></>
              : ""
          }
        </div>
      </div>
      <div>
        <CourseCards></CourseCards>
      </div>
    </div>
  );
};

export default Courses;
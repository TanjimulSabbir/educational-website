import React from 'react';
import Rating from '../Rating';
import Diana from '../../../Assets/Images/reviewer-1.png';
import CourseMotive from './CourseMotive';


const HowWork = () => {
    const motives = [{ _id: 1, title: "4 on-line lectures with a teacher", description: "Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est." },
    { _id: 2, title: "Subscription gives access to education materials and videos", description: "Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est." },
    { _id: 3, title: "After completing the course and completing the tasks, you will receive a certificate", description: "" }]
    return (
        <div>
            <div className="hero min-h-screen px-6 sm:px-8 md:px-14 mx-auto pb-14 shadow-2xl bg-slate-700">
                <div className="flex flex-col-reverse lg:flex-row lg:space-x-8">
                    <div className='md:mt-12 mx-auto flex-1 text-white
                    '>
                        <h1 className="text-4xl mt-12 md:mt-0 font-bold text-center">How does it work?</h1>
                        {motives.map(motive => <CourseMotive key={motive._id} motive={motive}></CourseMotive>)}
                    </div>
                    <div className="rounded-lg w-full mt-14 lg:mt-0 flex-1 shadow-2xl bg-slate-50">
                        <div className="card text-center mx-auto text-black lg:ml-10">
                            <div className='mx-auto mt-4'>
                                <img className='rounded-full ' src={Diana} alt="" />
                            </div>
                            <div className="card-body">
                                <h2 className="text-3xl font-bold">Diana Gloster</h2>
                                <Rating></Rating>
                                <p>“Mauris tellus lorem, tempus sed nibh at, varius convallis mi. sed scelerisque odio neque a lacus. Ut consectetur ligula. ed rhoncus sapien eget feugiat.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWork;
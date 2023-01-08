import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'

const CourseMotive = ({ motive }) => {
    const { title, description } = motive;
    return (
        <div>
            <div className="collapse collapse-plus mt-10 space-x-2 text-center shadow-lg">
                <div tabIndex={0} className="collapse border border-base-300 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        {title}
                    </div>
                    <div className="collapse-content">
                        <p className='text-green-500 ml-4'>{description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseMotive;
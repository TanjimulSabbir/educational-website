import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-emerald-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-emerald-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-emerald-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-emerald-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-emerald-500" checked />
            </div>
        </div>
    );
};

export default Rating;
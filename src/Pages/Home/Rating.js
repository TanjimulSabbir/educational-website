import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-700" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-700" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-700" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-700" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-700" checked />
            </div>
        </div>
    );
};

export default Rating;
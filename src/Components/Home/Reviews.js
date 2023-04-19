import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://parts-manufacturer-server-side.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=''>
            <h2 className='px-6 text-3xl font-bold text-primary'>User Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 my-4'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
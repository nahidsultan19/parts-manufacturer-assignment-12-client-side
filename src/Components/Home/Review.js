import React from 'react';
import gift from '../../assets/images/gift.jpg';

const Review = (props) => {
    const { name, review, number } = props.review;
    return (
        <div className='bg-slate-50 rounded-xl p-2 dark:bg-slate-800'>
            <div className='flex'>
                <img className='w-10 h-10 md:rounded-full' src={gift} alt="" />
                <div className='px-3'>
                    <h1>{name}</h1>
                    <h2>Rating: {number}</h2>
                </div>
            </div>
            <div className='py-3'>
                <p>Review: {review}</p>
            </div>
        </div>
    );
};

export default Review;
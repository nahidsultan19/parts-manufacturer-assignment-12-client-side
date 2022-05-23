import React from 'react';

const Review = (props) => {
    const { review, number } = props.review;
    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-md">
            <div class="card-body">
                <h2 class="card-title">Rating:{number}</h2>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;
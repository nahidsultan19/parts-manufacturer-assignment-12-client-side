import React from 'react';

const AddReview = () => {

    const handleAddReview = event => {
        event.preventDefault();
        const number = event.target.number.value;
        const review = event.target.review.value;
        console.log(number, review);
        const result = { number, review }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
            })
    }

    return (
        <div className='w-96'>
            <h2 className='text-xl mt-4'>Add Your Review</h2>
            <form className='my-5' onSubmit={handleAddReview}>
                <input type="number" name='number' class="input input-bordered w-full max-w-xs " />
                <input type="text" name='review' placeholder="Your Review" class="input input-bordered w-full max-w-xs mt-2" />
                <button class="btn mt-2">Add Review</button>
            </form>
        </div>
    );
};

export default AddReview;
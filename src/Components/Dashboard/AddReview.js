import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const handleAddReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const number = event.target.number.value;
        const review = event.target.review.value;
        const result = { name, number, review }
        fetch('https://parts-manufacturer-server-side.vercel.app/review', {
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
                <input type="text" name='name' value={user.displayName} className='input input-bordered w-full max-w-xs ' readOnly disabled />
                <input type="number" name='number' className="input input-bordered w-full max-w-xs mt-2" />
                <input type="text" name='review' placeholder="Your Review" className="input input-bordered w-full max-w-xs mt-2" />
                <button className="btn mt-2">Add Review</button>
            </form>
        </div>
    );
};

export default AddReview;
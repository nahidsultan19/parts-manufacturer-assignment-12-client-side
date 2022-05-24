import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { BsFillMouseFill } from 'react-icons/bs';
import image from '../../assets/images/footer.png';

const BusinessSummery = () => {
    return (
        <div className='my-10'>
            <h2 className='text-center my-12 text-3xl font-bold text-primary'>Business Summery</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='users text-center'>
                    <FaUsers className='text-5xl mx-auto' />
                    <p>100+ Customers</p>
                </div>
                <div className='reviews text-center'>
                    <MdReviews className='text-5xl mx-auto' />
                    <p>33K+ Reviews</p>
                </div>
                <div className='reviews text-center'>
                    <BsFillMouseFill className='text-5xl mx-auto' />
                    <p>50+ Parts</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;
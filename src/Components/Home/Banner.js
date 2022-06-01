import React from 'react';
import banner from '../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero my-12 bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='max-w-lg'>
                    <h1 className="text-3xl font-bold">Welcome to our parts gallary</h1>
                    <p className="py-6">We provide all kinds of computer parts with good service.We promise for good service.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
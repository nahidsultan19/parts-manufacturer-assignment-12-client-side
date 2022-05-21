import React from 'react';
import banner from '../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div class="hero my-12 bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='max-w-lg'>
                    <h1 class="text-3xl font-bold">Welcome to our parts gallary</h1>
                    <p class="py-6">We provide all kinds of computer parts with good service.We promise for good service.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
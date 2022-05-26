import React from 'react';
import headphone from '../../assets/images/headphone2.jpg';
import mouse2 from '../../assets/images/mouse2.jpg';

const Discount = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 my-12'>
            <div className='bg-[#efe8ed] p-5 border-0 rounded-md flex'>
                <div className='flex items-center justify-center'>
                    <img className='w-48 rounded-md ' src={headphone} alt="" />
                </div>
                <div className='flex justify-center items-center ml-12'>
                    <div className=''>
                        <h2 className='text-2xl font-bold my-3'>Headphone</h2>
                        <h4 className='bg-[#a88ca0] p-2 rounded-md uppercase text-white text-lg mb-3'>save up to 30% off</h4>
                        <p>This is new item for discount</p>
                        <button class="btn glass bg-purple-400 text-white mt-2">Shop now</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#cfe8fe] p-5 border-0 rounded-md flex'>
                <div className='md:flex items-center justify-center flex-col'>
                    <img className='w-48 h-60 rounded-md' src={mouse2} alt="" />
                </div>
                <div className='flex justify-center items-center ml-12'>
                    <div className=''>
                        <h2 className='text-2xl font-bold my-3'>New Mouse</h2>
                        <h4 className='bg-[#759fcc] p-2 rounded-md uppercase text-white text-lg mb-3'>Wareless Mouse</h4>
                        <p>This is new item for discount</p>
                        <button class="btn glass bg-purple-400 text-white mt-2">Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;
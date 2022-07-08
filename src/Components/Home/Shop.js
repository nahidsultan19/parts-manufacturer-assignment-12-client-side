import React from 'react';
import shipping from '../../assets/images/shipping.png';
import buy from '../../assets/images/buy.jpg';
import gift from '../../assets/images/gift.jpg';

const Shop = () => {
    return (
        <div className=''>
            <h2 className='text-center text-5xl font-bold text-primary'>Shop safely with parts store</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 my-12'>
                <div className="max-w-lg bg-base-100 border-2 p-1">
                    <div className='flex'>
                        <img className='w-28 items-center' src={shipping} alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">Free Shipping</h2>
                            <p>Free shipping for regular purchase</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg bg-base-100 border-2 p-1">
                    <div className='flex'>
                        <img className='w-28 h-28 items-center' src={buy} alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">Buy Now</h2>
                            <p>7 Days exchange option</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg bg-base-100 border-2 p-1">
                    <div className='flex'>
                        <img className='w-28 h-28 items-center' src={gift} alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">Gift Voucher</h2>
                            <p>Gift to you for product add everyday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
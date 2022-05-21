import React from 'react';

const Part = ({ part }) => {
    const { name, img, price, minQuantity, availableQuantity, des } = part;
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl mx-5">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl h-48" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{des}</p>
                <h4 className='text-xl'>Price:${price}</h4>
                <div className='text-xl'>
                    <p>minQuantity:{minQuantity}</p>
                    <p>availableQuantity:{availableQuantity}</p>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;
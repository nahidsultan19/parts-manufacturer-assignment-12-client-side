import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, price, minQuantity, availableQuantity, des } = part;
    const navigate = useNavigate();

    const handleBuy = id => {
        navigate(`/purchase/${id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{des}</p>
                <h4 className='text-xl'>Price:${price}</h4>
                <div className='text-xl'>
                    <p>minQuantity: {minQuantity}</p>
                    <p>availableQuantity:{availableQuantity}</p>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleBuy(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;
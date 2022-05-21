import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { name } = useParams();
    return (
        <div className='min-h-screen'>
            <h2 className='text-center text-2xl'>Purchase: {name}</h2>
        </div>
    );
};

export default Purchase;
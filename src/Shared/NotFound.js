import React from 'react';
import notfound from '../../src/assets/images/11.jpg';

const NotFound = () => {
    return (
        <div className='min-h-screen flex items-center'>
            {/* <h2 className='text-5xl font-bold'>404,Page Not Found</h2> */}
            <img className='w-6/12 mx-auto' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;
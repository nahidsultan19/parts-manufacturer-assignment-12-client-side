import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessSummery />
            <Reviews />
        </div>
    );
};

export default Home;
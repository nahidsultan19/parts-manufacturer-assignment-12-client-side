import React from 'react';
import portfolio1 from '../../assets/portfolio/Find-Phone.png';
import portfolio2 from '../../assets/portfolio/lucy-one-react.png';
import portfolio3 from '../../assets/portfolio/Service-provider.png';
import portfolio4 from '../../assets/portfolio/vehicle-inventory.png';

const MyPortfolio = () => {
    return (
        <>
            <h2 className='text-center text-2xl font-bold text-primary my-4'>My Simple Portfolio Project</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-12 mx-12'>
                <div class="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Phone Finder</h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href="https://nahidsultan19.github.io/find-phone-app-JS-API/" target="_blank">Check the Project</a></button>
                        </div>
                    </div>
                </div>
                <div class="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Lucky One</h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href="https://computer-accessories-store-react.netlify.app/" target="_blank">Check the Project</a></button>
                        </div>
                    </div>
                </div>
                <div class="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Independent Service</h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href="https://independent-service-prov-f9fbf.web.app/" target="_blank">Check the Project</a></button>
                        </div>
                    </div>
                </div>
                <div class="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio4} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Vehicle Inventory System</h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href="https://vehicle-inventory-2e22b.web.app/" target="_blank">Check the Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MyPortfolio;
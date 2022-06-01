import React from 'react';
import portfolio1 from '../../assets/portfolio/Find-Phone.png';
import portfolio2 from '../../assets/portfolio/lucy-one-react.png';
import portfolio3 from '../../assets/portfolio/Service-provider.png';
import portfolio4 from '../../assets/portfolio/vehicle-inventory.png';

const MyPortfolio = () => {
    return (
        <div className='min-h-screen'>
            <div class="card max-w-lg mx-auto bg-base-200 shadow-xl my-10">
                <div class="card-body">
                    <h2 class="card-title font-bold text-primary">NAHID SULTAN</h2>
                    <h4>sultannahid38@gmail.com</h4>
                    <p className='text-2xl'>Skills:</p>
                    <div className='grid grid-cols-3 md:grid-cols-4 gap-2'>
                        <span class="badge badge-lg">JavaScript</span>
                        <span class="badge badge-lg">React</span>
                        <span class="badge badge-lg">Python</span>
                        <span class="badge badge-lg">Django</span>
                        <span class="badge badge-lg">HTML</span>
                        <span class="badge badge-lg">CSS</span>
                        <span class="badge badge-lg">Bootstrap</span>
                        <span class="badge badge-lg">Tailwind</span>
                        <span class="badge badge-lg">Git</span>
                        <span class="badge badge-lg">Github</span>
                    </div>

                </div>
            </div>
            {/* project list */}
            <h2 className='text-center text-3xl font-bold text-primary my-4'>My Simple Portfolio Project</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-12 mx-12 pb-12'>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Phone Finder</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://nahidsultan19.github.io/find-phone-app-JS-API/" target="_blank">Live Site</a></button>
                        </div>
                    </div>
                </div>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lucky One</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://computer-accessories-store-react.netlify.app/" target="_blank">Live Site</a></button>
                        </div>
                    </div>
                </div>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Independent Service</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://independent-service-prov-f9fbf.web.app/" target="_blank">Live Site</a></button>
                        </div>
                    </div>
                </div>
                <div className="card max-w-lg bg-base-100 shadow-xl image-full max-h-60">
                    <figure><img src={portfolio4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Vehicle Inventory System</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://vehicle-inventory-2e22b.web.app/" target="_blank">Live Site</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyPortfolio;
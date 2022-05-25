import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ml-10">
                <h2 className='text-3xl font-bold text-purple-500'>Welcome to Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                    {!admin && <>
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/add-review'>Add a Review</Link></li>
                    </>}
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/manage-orders'>Manage All Orders</Link></li>
                        <li><Link to='/dashboard/add-product'>Add a Product</Link></li>
                        <li><Link to='/dashboard/manage-product'>Manage Product</Link></li>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                    </>}
                </ul>
            </div>
        </div >
    );
};

export default Dashboard;
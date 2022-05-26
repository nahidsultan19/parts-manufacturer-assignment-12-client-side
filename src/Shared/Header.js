import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const nav = <>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {/* <li><NavLink to='/services'>Services</NavLink></li> */}
        {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        {user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
        <li>{user ? <button onClick={logout} className='btn btn-ghost'>Logout</button> : <NavLink to='/login'>Login</NavLink>}</li>
        <li className=''>{user?.displayName}</li>

    </>
    return (
        <div className="navbar sticky  z-10 bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Parts Store</Link>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {nav}
                </ul>
            </div>
            <div className='navbar-end'>
                <label htmlFor="dashboard-sidebar" tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            </div>
        </div>
    );
};

export default Header;
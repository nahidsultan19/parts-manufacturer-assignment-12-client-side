import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Profile = () => {
    const [user, isLoading] = useAuthState(auth)
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/profile/${email}`)
            .then(res => res.json())
            .then(data => setProfiles(data))
    }, [user, profiles])

    if (isLoading) {
        return <Loading />
    }

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const userProfile = {
            name: user?.displayName,
            email: user?.email,
            address: event.target.address.value,
            phone: event.target.phone.value
        }


        const url = `http://localhost:5000/profile/${user?.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.userProfile);
                event.target.reset('');
            })
    }

    return (
        <div className="hero mt-10">
            <div className="hero-content border rounded-md border-indigo-500">
                <div className='avatar indicator'>
                    <label htmlFor="my-modal-6" className="btn indicator-item  btn-xs btn-primary">edit</label>
                    <div className='w-20 h-20'>
                        <img src="https://api.lorem.space/image/movie?w=260&h=400" className=" mask mask-circle shadow-2xl" />
                    </div>
                </div>
                <div className='ml-5'>
                    <h1 className='text-3xl font-bold'>{user?.displayName}</h1>
                    <h2 className='pt-4'>{user?.email}</h2>
                    <h3 className='font-2xl'>Phone: {profiles.phone}</h3>
                    <h4>Address: {profiles.address}</h4>
                </div>
            </div>

            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle z-10">
                    <div className="modal-box relative">
                        <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Update your profile</h3>
                        <form onSubmit={handleUpdateProfile} className='w-96'>
                            <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                            <input type="email" value={user?.email} className="input input-bordered w-full max-w-xs mt-2" disabled />
                            <input type="text" name='address' placeholder='Your Address' className="input input-bordered w-full max-w-xs mt-2" />
                            <input type="text" name='phone' placeholder='Your Phone Number' className="input input-bordered w-full max-w-xs mt-2" />
                            <button className='btn mt-2'>update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
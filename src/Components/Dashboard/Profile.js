import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user])

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const profile = {
            name: user?.displayName,
            email: user?.email,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        const url = `http://localhost:5000/profile/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset('');
            })
    }

    return (
        <div class="hero mt-10">
            <div class="hero-content border rounded-md border-indigo-500">
                <div className='avatar indicator'>
                    <label for="my-modal-6" class="btn indicator-item  btn-xs btn-primary">edit</label>
                    {/* <span class="indicator-item  btn btn-xs btn-primary">edit</span> */}
                    <div className='w-20 h-20'>
                        <img src="https://api.lorem.space/image/movie?w=260&h=400" class=" mask mask-circle shadow-2xl" />
                    </div>
                </div>
                <div className='ml-5'>

                    {profile?.map(pro => <div>
                        <h1 class="text-5xl font-bold">{user?.displayName ? user.displayName : 'No Name'}</h1>
                        <p class="py-6">{user?.email}</p>
                    </div>)}

                </div>
            </div>

            <div>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle z-10">
                    <div class="modal-box relative">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg">Update your profile</h3>
                        <form onSubmit={handleUpdateProfile} className='w-96'>
                            <input type="text" value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                            <input type="email" value={user?.email} class="input input-bordered w-full max-w-xs mt-2" disabled />
                            <input type="text" name='address' placeholder='Your Address' class="input input-bordered w-full max-w-xs mt-2" />
                            <input type="text" name='phone' placeholder='Your Phone Number' class="input input-bordered w-full max-w-xs mt-2" />
                            <button className='btn mt-2'>update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
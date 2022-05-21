import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user)
    }

    return (
        <div class="hero-content min-h-screen flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 shadow-2xl bg-base-100">
                <div class="card-body">

                    <p>Don't have an Account?<Link to='/' className='btn btn-link'>Create an Account</Link></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline w-full">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
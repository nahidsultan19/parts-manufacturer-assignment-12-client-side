import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading';

import photo from '../../assets/images/banner.jpg';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors, isDirty, isValid }, handleSubmit } = useForm({ defaultValues: { email: '' }, mode: 'all' });
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [formStep, setFormStep] = useState(0);


    const [token] = useToken(user || googleUser);

    let errorElement;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    if (loading || googleLoading) {
        return <Loading />
    }

    if (error || googleError) {
        errorElement = <p className='text-red-500'>Error: {googleError?.message || error?.message}</p>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);


    };


    // multiform step
    const completeForm = () => {
        setFormStep(cur => cur + 1);
    }

    const loginButton = () => {
        if (formStep > 1) {
            return;

        } else if (formStep === 1) {
            return (<button disabled={!isDirty && !isValid} type="submit" className="btn btn-success text-white font-bold w-full max-w-xs">Login</button>
            )
        } else {
            return (<button disabled={!isDirty && !isValid} onClick={completeForm} className="btn btn-success text-white font-bold w-full max-w-xs">Next</button>)
        }
    }


    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex-shrink-0 shadow-sm bg-base-200">
                <div className="card-body w-96">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {formStep >= 0 && <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Email Address</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs"{...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} autoFocus />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email.message}</span>}
                            </label>

                        </div>}
                        {formStep >= 1 && <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs"{...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Should be 6 characters or longer'
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                        </div>}
                        {errorElement}
                        {/* <button disabled={!isDirty && !isValid} onClick={completeForm} className="btn btn-success text-white font-bold w-full max-w-xs">{formStep === 1 ? 'Login' : 'Next'}</button> */}
                        {loginButton()}
                    </form>
                    <p className='text-center'>Don't have an Account?<Link to='/register' className='btn btn-link'>Sign Up</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full">Continue with google</button>
                </div>
            </div>
            {/* <div className="">
                <img src={photo} className="max-w-lg h-96 rounded-lg" />
            </div> */}
        </div>
    );
};

export default Login;
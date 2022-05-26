import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading';
const Register = () => {
    const [updateProfile] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user || googleUser)

    const navigate = useNavigate()
    console.log(user);

    if (token) {
        // console.log(user || googleUser);
        navigate('/')
    }

    if (loading || googleLoading) {
        return <Loading />
    }

    const onSubmit = async data => {
        console.log(data.name)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
        console.log(data);
        navigate('/')
    };

    return (
        <div class="hero-content min-h-screen flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"{...register("name")} />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"{...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs"{...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Should be 6 characters or longer'
                                }
                            })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <button class="btn btn-success text-white font-bold w-full max-w-xs">Register</button>
                    </form>
                    <p>Already have an Account?<Link to='/login' className='btn btn-link'>SignIn</Link></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline w-full">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
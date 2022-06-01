import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading';

const stripePromise = loadStripe('pk_test_51L0ehtLbhQEWKnEMXeoJeEJfrTID8adEKc5oWcPNZF2sCOu2Mc0Zge5llWFSD61ODZxsVB2MaFJsewkDGiOgrvqF005JmRVw4z');

const Payment = () => {
    const { id } = useParams();
    const url = `https://intense-mountain-68049.herokuapp.com/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="card-title">Pay for :{order.name}</h2>
                    <p>Price:${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
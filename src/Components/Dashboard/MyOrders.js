import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = (id) => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [isReload, setIsReload] = useState(false)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user, isReload])



    const handleOrderDelete = id => {
        console.log(id);
        const confirm = window.confirm('Are you sure,you want to delete?');
        if (confirm) {
            const url = `http://localhost:5000/order-delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsReload(!isReload);
                })
        }
    }

    return (
        <div>
            <h2>My Orders:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Price</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.name}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>
                                    {!order.paid && <button onClick={() => handleOrderDelete(order._id)} class="btn btn-xs">Delete</button>}
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-xs btn-success">Pay</button></Link>}
                                    {order.paid && <div>
                                        <p><span className='text-green-500'>Paid</span></p>
                                        <p>TransactionId: <span className='text-green-500'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
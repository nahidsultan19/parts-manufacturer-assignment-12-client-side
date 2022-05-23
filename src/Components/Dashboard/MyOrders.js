import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [isReload, setIsReload] = useState(false)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
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
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.name}</td>
                                <td>{order.quantity}</td>
                                <td><button onClick={() => handleOrderDelete(order._id)} class="btn btn-xs">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
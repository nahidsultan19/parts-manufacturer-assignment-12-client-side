import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [shipped, setShipped] = useState('')
    const [pending, setPending] = useState('')
    const [isReload, setIsReload] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isReload])

    const handleItemDelete = id => {
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

    const handleOrderConfirm = id => {
        console.log(pending ? 'shipped' : 'pending')
        setPending(pending ? 'shipped' : 'pending');

    }

    return (
        <div>
            <h2>All Orders:{orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                    {(order.price && !order.paid) && <div>
                                        <span className="btn btn-xs btn-warning">Unpaid</span>
                                        <button onClick={() => handleItemDelete(order._id)} className='btn btn-xs'>Delete</button>
                                    </div>}
                                    {order.paid && <div>
                                        <button onClick={() => handleOrderConfirm(order._id)} className='btn btn-xs btn-error'>Pending</button>
                                    </div>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageAllOrders;
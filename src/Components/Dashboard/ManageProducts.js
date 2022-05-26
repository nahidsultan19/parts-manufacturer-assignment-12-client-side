import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isReload, setIsReload] = useState(false)
    useEffect(() => {
        fetch('https://intense-mountain-68049.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload]);

    const handleItemDelete = id => {
        const confirmDelete = window.confirm('Are you sure you want to delete?');
        if (confirmDelete) {
            const url = `https://intense-mountain-68049.herokuapp.com/parts-delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsReload(!isReload);
                })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th><img className='w-16 h-16 rounded-full' src={product.img} alt="" /></th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.availableQuantity}</td>
                                <td>
                                    <button onClick={() => handleItemDelete(product._id)} className='btn btn-xs'>delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;

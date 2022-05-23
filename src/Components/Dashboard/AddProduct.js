import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const handleAddProduct = item => {
        fetch('http://localhost:5000/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Product Added')
                item.target.reset('')
            })
    }
    return (
        <div className='max-w-lg'>
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)} className='card p-2 mb-2'>
                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Product Name' {...register("name")} />
                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Description' {...register("des")} />
                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='availableQuantity' type="number" {...register("availableQuantity")} />
                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='minQuantity' type="number" {...register("minQuantity")} />
                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Photo URL' type="text" {...register("img")} />
                <button className='btn w-full max-w-xs'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
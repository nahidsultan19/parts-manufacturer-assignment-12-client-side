import React, { useEffect, useReducer, useState } from 'react';
import Part from './Part';
import { INITIAL_STATE, partsReducer } from '../../utils/partsReducer';
import { actionTypes } from '../../utils/actionTypes';
import Loading from '../../Shared/Loading';

const Parts = () => {
    // const [parts, setParts] = useState([]);
    const [state, dispatch] = useReducer(partsReducer, INITIAL_STATE);
    const { parts, loading, error } = state;
    // console.log(parts);

    // useEffect(() => {
    //     fetch('https://parts-manufacturer-server-side.vercel.app/parts')
    //         .then(res => res.json())
    //         .then(data => setParts(data))
    // }, [])

    useEffect(() => {
        dispatch({ type: actionTypes.FETCH_START });
        fetch('https://parts-manufacturer-server-side.vercel.app/parts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data })
            })
            .catch((err) => {
                dispatch({ type: actionTypes.FETCH_ERROR });
            })
    }, [])

    let content;

    if (parts) {
        content = parts.map(part => <Part key={part._id} part={part} />)
    }
    if (loading) {
        content = <Loading />
    }
    if (error) {
        content = <p className='p-8 text-red-500'>Data fetching error</p>
    }



    return (
        <div className='px-6'>
            <h2 className='text-3xl font-bold text-cyan-500 py-4'>All Parts</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {content}
            </div>
        </div>
    );
};

export default Parts;
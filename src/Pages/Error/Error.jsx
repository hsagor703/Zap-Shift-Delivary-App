import React from 'react';
import error from '../../assets/error.png'
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className='bg-amber-50 mt-8 text-center py-10'>
            <img className='mx-auto ' src={error} alt="" />
            <Link to='/' className='btn bgColor1'>Go Home</Link>
        </div>
    );
};

export default Error;
import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
         <div className='min-h-screen flex justify-center items-center'>
            <h1 className='text-3xl font-bold text-red-500 btn'>Payment cancel</h1>
            <Link to={'/dashboard/my-parcels'} className='btn btn-success'> Try Again </Link>
        </div>
    );
};

export default PaymentCancel;
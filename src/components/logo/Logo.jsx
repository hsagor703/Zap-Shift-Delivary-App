import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link className='flex items-end  '>
            <img src={logo} alt="logo" />
            <h3 className='-ms-2.5 font-extrabold text-3xl'>ZapShift</h3>
        </Link>
    );
};

export default Logo;
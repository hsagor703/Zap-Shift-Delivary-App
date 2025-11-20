import React from 'react';
import Banner from '../Banner/Banner';
import WorkSystem from '../../components/WorkSystem/WorkSystem';
import OurServices from '../../components/OurService/OurServices';
import Brands from './Brands/Brands';
import Active from './Active/Active';
import Banner2 from '../Banner/Banner2';
import Reviews from './Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json())
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkSystem></WorkSystem>
            <OurServices></OurServices>
            <Brands></Brands>
            <Active></Active>
            <Banner2></Banner2>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;
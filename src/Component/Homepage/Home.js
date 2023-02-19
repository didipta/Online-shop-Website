import React from 'react';
import Banner from '../Banner/Banner';
import DailyDeals from '../Daily Deals/DailyDeals';
import Header from '../Navbar/Header';
import Sliderproduct from '../Sliderproduct/Sliderproduct';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="flex justify-between gap-8 h-screen overflow-x-auto">
                <div className="bg-white hidden lg:block w-9/12">
                 
                </div>

                <div className="bg-white w-full lg:w-3/12 overflow-x-auto lg:shadow-sm shadow-slate-400 p-0">
                <DailyDeals></DailyDeals>
                </div>
               
            </div>
        </div>
    );
};

export default Home;
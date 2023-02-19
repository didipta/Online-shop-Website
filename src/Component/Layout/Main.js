import React from 'react';
import Home from '../Homepage/Home';
import Navbar from '../Navbar/Navbar';
const Main = () => {

    return (
        <div>
            <div className="flex justify-between gap-8 h-screen overflow-x-auto">
                <div className="bg-white hidden lg:block w-2/12 shadow-lg">
                   <Navbar></Navbar>
                </div>

                <div className="bg-white w-full lg:w-10/12 overflow-x-auto lg:shadow-sm shadow-slate-400 lg:p-5 p-0">
                 <Home></Home>
                </div>
               
            </div>
        </div>
    );
};

export default Main;
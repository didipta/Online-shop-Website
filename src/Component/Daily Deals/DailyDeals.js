import React from 'react';
import { Product } from '../Hook/Product';

const DailyDeals = () => {
    // hook use
    const [Products,isLoading]=Product();

    const {products}=Products;

    console.log(Products);
    return (
        <div>
            <div className="flex justify-between items-center ">
            <h1 className=" font-bold text-md">Daily Deals</h1>
            <a href="#" className="text-sm">View All</a>
            </div>
            <div className="flex flex-col gap-4 mt-3">
                {
                    products.map(p=>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-1">
                            <img src={p.picture} alt="" className="w-10 rounded-full"></img>
                            <div>
                                <h1 className="text-sm font-bold">{p.name}</h1>
                                <p className="text-xs">{p.review} Review And {p.order} Order</p>
                            </div>
                            </div>
                            <div>
                                <h1 className="text-xs font-medium"> Price ${p.price}</h1>
                            </div>
                        </div>
                        )
                }
            </div>
            
            
        </div>
    );
};

export default DailyDeals;
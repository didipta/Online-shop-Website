import React, { useState } from 'react';
import {faHeart,faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Banner = () => {
    const [count,setcount] = useState(0);
    return (
        <div className="flex items-center justify-around">
            <div className="flex items-center gap-5 lg:w-7/12 w-full shadow-xl rounded-sm overflow-hidden">
                <img src="https://drive.google.com/uc?export=view&id=1Cy9MQYkGu-Xl8F7c2jBFhMnXh58tKDql" alt="" className="w-80"></img>
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">Beats Studio3 Wireless Headphone</h1>
                    <p className="flex items-center text-sm">
                        <div>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400"></FontAwesomeIcon>
                    
                        </div>
                        ( 200+ Reviews )
                    </p>
                    <p className=" w-72 text-xs">Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
                    <p className="text-sm text-blue-400 font-bold">Price $ 450.55</p>
                    <div className="flex justify-between items-center">
                    <p  className="flex items-center gap-2"> Color :

                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-red-600"></div>
                            <div className="w-5 h-5 rounded-full bg-green-600"></div>
                            <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                            <div className="w-5 h-5 rounded-full bg-yellow-600"></div>
                            <div className="w-5 h-5 rounded-full  bg-white"></div>
                        </div>
                    </p>
                    <div className="flex gap-2 items-center bg-slate-50 text-xs">
                    <p onClick={()=>setcount(count-1)} className="cursor-pointer p-1 bg-slate-400 font-semibold">-</p>
                    <p>{count}</p>
                    <p  onClick={()=>setcount(count+1)} className="cursor-pointer p-1 bg-slate-400 font-semibold">+</p>
                    </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="btn btn-sm btn-outline btn-accent"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                        <button class="btn btn-sm btn-outline btn-success">Add to card</button>
                        <button className="btn btn-sm btn-error">Buy Now</button>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col gap-3 w-3/12 shadow-xl rounded-lg p-5 bg-red-400">
                <p className="w-60 text-sm font-bold text-white">
                Summer headphones from top brands
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-sm font-bold text-white">
                    Buy it Now
                    </p>
                    <img src="https://drive.google.com/uc?export=view&id=1Cy9MQYkGu-Xl8F7c2jBFhMnXh58tKDql" alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;
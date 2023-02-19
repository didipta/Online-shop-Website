import React from 'react';
import {faBars,faHome,faExplosion,faHeart,faCartPlus,faMoneyBill,faHistory,faGear,faComment,faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from "../img/icon.png"
const Navbar = () => {
    const nav=[
        {id:1,icon:faHome,name:"Home"},
        {id:2,icon:faExplosion,name:"Explore"},
        {id:3,icon:faHeart,name:"Saved"},
        {id:4,icon:faCartPlus,name:"Cart"},
        {id:5,icon:faMoneyBill,name:"Selling"},
        {id:6,icon:faUser,name:"Profile"},
        {id:7,icon:faHistory,name:"History"},
        {id:8,icon:faComment,name:"Contact us"},
        {id:9,icon:faGear,name:"Setting"},
    ]
    return (
        <div className="p-3 ">
            {/* Website icon and name */}

            <div className="flex items-center gap-3 mb-10 pt-5 lg:pl-7">
              <img src={icon} alt="" className="w-8"></img>
              <h1 className=' font-bold text-slate-700 text-lg'>MK Sounds</h1>
            </div>

            {/* navber */}
            <div className=" flex flex-col gap-5 lg:pl-7">
                {
                    nav.map(x=>
                        <li className="flex items-center gap-3" key={x.id}>
                            <FontAwesomeIcon icon={x.icon}></FontAwesomeIcon>
                            <p>{x.name}</p>
                        </li>
                        )
                }
            </div>

            <div className="bg-green-300 m-2 rounded-lg p-3 text-center flex flex-col gap-3 text-white">
                <div className="m-auto">
                <p className='bg-green-700 rounded-full w-7 h-7 flex justify-center items-center text-lg font-semibold'>+</p>
                </div>
                
                <h1 className=" font-semibold text-lg">Need Help</h1>
                <p className=" font-bold text-xs">
                Lorem Ipsum is simply 
                dummy text of the 
                printing and typesetting
                industry. Lorem Ipsum 
                </p>
                <button className="btn border-none bg-green-700 btn-sm shadow-lg text-white">Customer Service</button>
            </div>
        </div>
    );
};

export default Navbar;
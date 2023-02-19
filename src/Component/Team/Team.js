import React from 'react';
import img1 from "../img/image 1.png"
import img2 from "../img/image 2.png"
import img3 from "../img/image 3.png"
const Team = () => {
    return (
<div className="bg-slate-300">
    <h1 className=" text-center font-semibold p-5">
        Team Awesome
    </h1>
<div className="flex justify-between items-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <img src={img1} alt=""></img>
                <h1>Robert </h1>
                <h1>Founder</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <img src={img2} alt=""></img>
                <h1>Robert </h1>
                <h1>Founder</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <img src={img3} alt=""></img>
                <h1>Robert </h1>
                <h1>Founder</h1>
            </div>
        </div>
</div>
        
    );
};

export default Team;
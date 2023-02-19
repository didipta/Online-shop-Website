import { InfiniteCarousel } from "react-leaf-carousel";
import { Allproducthook } from "../Hook/Allproducthook";
import {faHeart,faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sliderproduct = () => {
    const [Products,isLoading]=Allproducthook();
    const {products}=Products;
    return (
        <div className="grid grid-cols-5 mt-10 gap-3">
          {
            products.map(x=>
                <div className="flex flex-col shadow-lg justify-center items-center gap-2 p-3 rounded-md ">
                    <img src={x.picture} alt="" className=" w-24 h-20"></img>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xs font-semibold">{x.name}</h1>
                        <p className="text-xs ">Price ${x.price}</p>
                        <div className="flex justify-around ">
                        <p className="text-xs flex items-center gap-1"><FontAwesomeIcon icon={faStar} className="text-yellow-400"></FontAwesomeIcon>{x.ratting}</p>
                        <p className='bg-green-700 rounded-full w-7 h-7 flex justify-center items-center text-lg font-semibold text-white'>+</p>
                        </div>
                        
                    </div>
                </div>
                )
          }

  
        </div>
    );
};

export default Sliderproduct;
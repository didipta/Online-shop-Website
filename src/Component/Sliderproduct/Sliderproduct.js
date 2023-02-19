import React, { useEffect, useState } from 'react';
import { InfiniteCarousel } from 'react-leaf-carousel';
import { Product } from '../Hook/Product';

const Sliderproduct = () => {
    const [Products,isLoading]=Product();

    const {products}=Products;
   console.log(products)
    return (
        <div>
           
           </div>
    );
};

export default Sliderproduct;
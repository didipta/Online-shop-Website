import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const Allproducthook = () => {
    const {data: Products = {},refetch,isLoading} = useQuery({
        queryKey: ['Products'],
        queryFn: async() =>{
            const res = await fetch("https://api.hiring.masterkey.tech/api/v1/product/get")
            const data = await res.json();
            return data;
           
        }
    });
    return [Products,isLoading];

   
};
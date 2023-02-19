import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const Producthook = () => {
    const {data: Product = [],refetch,isLoading} = useQuery({
        queryKey: ['Product'],
        queryFn: async() =>{
            const res = await fetch("https://api.hiring.masterkey.tech/api/v1/product/get")
            const data = await res.json();
            return data;
           
        }
    });
    return [Product,isLoading];

   
};
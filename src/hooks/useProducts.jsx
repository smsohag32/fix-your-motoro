import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useProduct = () => {

   const { data: products, isLoading: pLoading } = useQuery({
     queryKey: ["products"],
     queryFn: async () => {
       const res = await axios.get(`https://fya-backend.vercel.app/api/v1/auth/products`);
       return res.data;
     },
   });
   return { products, pLoading };
};

export default useProduct;
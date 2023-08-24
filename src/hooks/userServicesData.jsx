import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useServicesData = () => {

   const { data: services, isLoading: sLoading } = useQuery({
     queryKey: ["services"],
     queryFn: async () => {
       const res = await axios.get(`https://fya-backend.vercel.app/api/v1/auth/services`);
       return res.data;
     },
   });
   return { services, sLoading };
};

export default useServicesData;
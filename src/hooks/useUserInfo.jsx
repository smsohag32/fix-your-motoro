import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import axios from 'axios';

const useUserInfo = () => {
   const { user, loading } = useAuth();

   const { data: userInfo, isLoading: cLoading } = useQuery({
     queryKey: ["isAdmin", user?.email],
     enabled: !loading,
     queryFn: async () => {
       const res = await axios.get(`https://fya-backend.vercel.app/api/v1/auth/users/${user?.email}`);
       return res.data;
     },
   });
   return { userInfo, cLoading };
};

export default useUserInfo;
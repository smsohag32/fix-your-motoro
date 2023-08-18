"use client"
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

const UserOnly = ({children}) => {
    const router = useRouter()
    const {user , loading} = useAuth();
    if(loading){
        return "loading"
    }
    if(!user){
        return router.push("/login")
    }
    return children
};

export default UserOnly;
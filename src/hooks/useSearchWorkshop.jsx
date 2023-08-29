import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useSearchWorkshop = ({selectedDistrict}) => {
console.log(selectedDistrict);
    
  const { data: searchData, isLoading: sLoading, refetch} = useQuery({
    queryKey: ["searchData"],
    queryFn: async () => {
      const res = await axios.get(`https://fya-backend.vercel.app/api/v1/auth/workshops/search/division?location=${selectedDistrict}`);
      return res.data;
    },
  });

  return {searchData, sLoading, refetch}
};

export default useSearchWorkshop;
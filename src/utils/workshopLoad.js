import axios from "axios";

export const workshopLoad = async (searchText, currentPage, limit) => {
  const res = await axios.get(
    `https://fya-backend.vercel.app/api/v1/auth/workshops/search/division?location=${searchText}&page=${currentPage}&limit=${limit}`
  );
  const data = res.data;
  return data;
};

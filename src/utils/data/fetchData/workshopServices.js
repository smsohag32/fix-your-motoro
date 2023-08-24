import axios from "axios";

const API_BASE_URL = "https://fya-backend.vercel.app/api/v1/auth";

const workshopServices = async (email) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/${email}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return null;
  }
};

export default workshopServices;

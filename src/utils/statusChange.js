import axios from "axios"

const statusChange = async({newStatus, id})=>{
    const status = {status: newStatus}
    const res = await axios.put(`https://fya-backend.vercel.app/api/v1/auth/orders/status/${id}`, status);
    const data = res.data;
    return data;
}

export default statusChange;
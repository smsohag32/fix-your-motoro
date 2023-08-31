import axios from "axios"

const statusChange = async ({newData, id}) => {
    
    const res = await axios.patch(`https://fya-backend.vercel.app/api/v1/auth/orders/status/${id}`, newData);
    const data = res.data;
    return data;
}

export default statusChange;
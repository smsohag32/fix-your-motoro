import axios from "axios";

const saveUser = async (user) => {
  const email = user?.email;
  const userInfo = {
    name: user.displayName,
    email: user.email,
    image: user.photoURL,
  };
  const res = await axios.put(
    `https://fya-backend.vercel.app/api/v1/auth/users/${email}`,
    userInfo
  );
  const data = res.data;
  return data;
};

export default saveUser;

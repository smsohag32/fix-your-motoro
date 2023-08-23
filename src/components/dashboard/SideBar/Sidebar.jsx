"use client"

import useUserInfo from "@/hooks/useUserInfo";

const Sidebar = () => {
  const {userInfo, cLoading} = useUserInfo();
  console.log(userInfo);
  return (
    <div className="bg-red-200">
      <h1 className="text-5xl">Side Bar</h1>
    </div>
  );
};

export default Sidebar;

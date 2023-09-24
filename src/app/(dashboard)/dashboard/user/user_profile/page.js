import UserProfile from "@/components/dashboard/UserDashboard/UserProfile";
import React from "react";

export const metadata = {
  title: "FYM | Dashboard | User profile",
  description: "FYM Dashboard User profile",
};
const UserProfilePage = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;

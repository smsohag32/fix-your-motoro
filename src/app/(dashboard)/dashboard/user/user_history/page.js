import UserHistory from "@/components/dashboard/UserDashboard/UserHistory";
import React from "react";

export const metadata = {
  title: "FYM | Dashboard | user | user history",
  description: "FYM Dashboard user history",
};

const UserHistoryPage = () => {
  return (
    <div>
      <UserHistory />
    </div>
  );
};

export default UserHistoryPage;

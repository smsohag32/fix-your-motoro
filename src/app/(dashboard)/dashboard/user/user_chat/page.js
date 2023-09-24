import UserChat from "@/components/Chat/UserChat";
import React from "react";

export const metadata = {
  title: "FYM | Dashboard | User Chat",
  description: "FYM Dashboard Chat",
};

const UserAppointmentsPage = () => {
  return (
    <div>
      <UserChat />
    </div>
  );
};

export default UserAppointmentsPage;

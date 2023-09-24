import UserSupport from '@/components/dashboard/UserDashboard/UserSupport';
import React from 'react';


export const metadata = {
    title: "FYM | Dashboard | User Support",
    description: "FYM Dashboard User Support",
  };
const UserSupportPage = () => {
    return (
        <div>
           <UserSupport/>
        </div>
    );
};

export default UserSupportPage;
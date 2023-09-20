'use client'
import NotificationDisplay from "./NotificationDisplay";

function NotificationAdmin() { 

const username ="Admin_FYM";
  return (
     
    <div className="">
     
      <NotificationDisplay
        username={username}
        room={500}
      />
    </div>

  );
}

export default NotificationAdmin;
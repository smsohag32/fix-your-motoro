'use client'
import NotificationDisplay from "./NotificationDisplay";

function NotificationAdmin() {

  const username = "Admin_FYM";
  return (
    <div className="md:mt-16">
      <NotificationDisplay
        username={username}
        room={500}
      />
    </div>
  );
}

export default NotificationAdmin;
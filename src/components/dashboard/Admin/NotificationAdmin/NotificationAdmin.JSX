'use client'
import io from "socket.io-client";
import { useState } from "react";
import NotificationDisplay from "./NotificationDisplay";
import useAuth from "@/hooks/useAuth";

const socket = io.connect("https://steep-mountainous-avatar.glitch.me");

// socket io server deploy app link: https://glitch.com/edit/#!/steep-mountainous-avatar
// socket io server deploy live link: https://steep-mountainous-avatar.glitch.me

function NotificationAdmin() { 
   const [notification, setNotification] = useState(0);
  const { user } = useAuth();

  return (
     
    <div className="mt-8">
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-3">For Admin Notificatoin Push</h2>
      <NotificationDisplay
        socket={socket}
        username={user?.displayName}
        room={500}
        notification={notification}
        setNotification={setNotification}
      />
    </div>
  </div>
  );
}

export default NotificationAdmin;
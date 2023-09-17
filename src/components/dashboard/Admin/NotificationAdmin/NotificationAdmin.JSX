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
const username ="Admin";
  return (
     
    <div className="">
     
      <NotificationDisplay
        socket={socket}
        username={username}
        room={500}
        notification={notification}
        setNotification={setNotification}
      />
    </div>

  );
}

export default NotificationAdmin;
"use client";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import useWorkshops from "@/hooks/useWorkshops";
import useAuth from "@/hooks/useAuth";
// const socket = io.connect("https://steep-mountainous-avatar.glitch.me");
const socket = io.connect("http://localhost:3001");
// socket io server deploy app link: https://glitch.com/edit/#!/steep-mountainous-avatar
// socket io server deploy live link: https://steep-mountainous-avatar.glitch.me

function UserChat() {
  const [notification, setNotification] = useState(0);
  const { user } = useAuth();
  const { workshops } = useWorkshops();

  return (
    <div className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-3">
          Chat Group For Admin and Users
        </h2>
        <Chat
          socket={socket}
          username={user?.displayName}
          room={100}
          notification={notification}
          setNotification={setNotification}
        />
      </div>
    </div>
  );
}

export default UserChat;

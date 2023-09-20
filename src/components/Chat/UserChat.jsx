"use client";
import Chat from "./Chat";
import useAuth from "@/hooks/useAuth";

// socket io server deploy app link: https://glitch.com/edit/#!/steep-mountainous-avatar
// socket io server deploy live link: https://steep-mountainous-avatar.glitch.me

function UserChat() {
  const { user } = useAuth();

  return (
    <div className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-3">
          Message Room For Admin and Users
        </h2>
        <Chat
          username={user?.displayName}
          room={100}
        />
      </div>
    </div>
  );
}

export default UserChat;

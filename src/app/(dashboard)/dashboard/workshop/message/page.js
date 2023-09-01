// message
"use client"
import useAuth from '@/hooks/useAuth';
import io from "socket.io-client";
import Chat from "@/components/dashboard/UserDashboard/Chat/Chat";
import { useState } from 'react';
import useWorkshops from '@/hooks/useWorkshops';

const socket = io.connect("http://localhost:3001");
const WorkshopMessage = () => {
    const [notification, setNotification] = useState(0);
    const { user } = useAuth();
    const { workshops } = useWorkshops();
console.log(workshops);
    return(

      
      <div className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-3">Chat with Workshop</h2>
        <Chat
          socket={socket}
          username={user?.displayName}
          room={101}
          notification={notification}
          setNotification={setNotification}
        />
      </div>
    </div>
 
     
    )
}
export default WorkshopMessage;
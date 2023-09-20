"use client"
import useAuth from '@/hooks/useAuth';
import Chat from "@/components/Chat/Chat";

const WorkshopMessage = () => {
    const { user } = useAuth();
 
    return(

      
      <div className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-3">Chat For Workshop and Client</h2>
        <Chat
          username={user?.displayName}
          room={200}
        />
      </div>
    </div>
 
     
    )
}
export default WorkshopMessage;
"use client"

import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import useAuth from "@/hooks/useAuth";

const Overview = () => {
    const {user} = useAuth();
    const vehicles = [];
    return (
        <div>
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName}!</h1>
        <section className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-lg font-semibold mb-2">Your Information</h2>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </section>
        <section className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-lg font-semibold mb-2">Your Vehicles</h2>
          <div>
           {
            vehicles.length > 0 ?  vehicles.map(item => <div key={item._id}><p>{item.model}</p></div>) : <EmptyState message={'You not to add any vehicles'} label={'Add Your Vehicles'} address={'/dashboard/user/myvehicles'}/>
           }
          </div>
        </section>

        </div>
    );
};

export default Overview;
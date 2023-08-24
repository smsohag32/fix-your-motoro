"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";

const OverviewDashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-2xl primary-text font-semibold">
            Welcome to {user?.displayName}'s Dashboard
          </h1>
        </header>
        <main className="p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
            <p>
              Welcome to your workshop dashboard. Here, you can manage various
              aspects of your workshop.
            </p>
            <p>Manage Your all activities from here.</p>
          </div>
          <div className="md:flex gap-10 justify-center items-center">
            {/* workshop card */}
            <figure>
              image
              <figcaption> image name </figcaption>
            </figure>
            <div>
              workshop details workshop details workshop details workshop
              details
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OverviewDashboard;

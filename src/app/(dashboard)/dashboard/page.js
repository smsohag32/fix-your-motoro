import React from "react";

const OverviewDashboard = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-2xl font-semibold">Welcome, Workshop Owner!</h1>
        </header>
        <main className="p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
            <p>
              Welcome to your workshop dashboard. Here, you can manage various
              aspects of your workshop.
            </p>
            <p>Feel free to customize this dashboard to suit your needs.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OverviewDashboard;

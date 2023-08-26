import Overview from "@/components/PagesSection/Dasboard/Overview/Overview";
import PopularWorkShop from "@/components/PagesSection/Dasboard/Overview/PopularWorkShop";
import React from "react";

const OverviewDashboard = () => {
  return (
    <div>
      <div>
        <Overview />
      </div>

      <div>
        <PopularWorkShop />
      </div>
    </div>
  );
};

export default OverviewDashboard;

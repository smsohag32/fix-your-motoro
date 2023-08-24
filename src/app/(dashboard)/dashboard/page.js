import NewServices from "@/components/PagesSection/Dasboard/Overview/NewServices";
import Overview from "@/components/PagesSection/Dasboard/Overview/Overview";
import PopularWorkShop from "@/components/PagesSection/Dasboard/Overview/PopularWorkShop";
import Products from "@/components/PagesSection/Dasboard/Overview/Products";
import React from "react";

const OverviewDashboard = () => {
  return (
    <div>
     
     <div>
      <Overview/>
     </div>

     <div>
      <PopularWorkShop/>
     </div>

    </div>
  );
};

export default OverviewDashboard;

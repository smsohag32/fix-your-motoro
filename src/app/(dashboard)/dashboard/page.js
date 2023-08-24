import NewServices from "@/components/PagesSection/Dasboard/Overview/NewServices";
import PopularWorkShop from "@/components/PagesSection/Dasboard/Overview/PopularWorkShop";
import Products from "@/components/PagesSection/Dasboard/Overview/Products";
import React from "react";

const OverviewDashboard = () => {
  return (
    <div>
     
     <div>
      <PopularWorkShop/>
     </div>
      <div>
        <NewServices/>
      </div>
      
      <Products/>

    </div>
  );
};

export default OverviewDashboard;

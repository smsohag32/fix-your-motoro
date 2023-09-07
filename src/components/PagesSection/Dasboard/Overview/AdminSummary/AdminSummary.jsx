import { useEffect, useState } from "react";
import DashboardStats from "./DashboardStats";
import MidSpinner from "@/components/Spinners/MidSpinner";

const AdminSummary = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://fya-backend.vercel.app/api/v1/auth/admin/summary")
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <MidSpinner />
      ) : (
        <DashboardStats
          totalWorkshop={chartData.totalWorkshop}
          totalCars={chartData.totalCars}
          totalWorkOrder={chartData.totalWorkOrder}
          approvedWorkshop={chartData.approvedWorkshop}
          totalPendingWorkshop={chartData.totalPendingWorkshop}
          totalDisabledWorkshop={chartData.totalDisabledWorkshop}
          totalUsers={chartData.totalUsers}
          approvedOrder={chartData.approvedOrder}
          pendingOrder={chartData.pendingOrder}
        />
      )}
    </div>
  );
};

export default AdminSummary;

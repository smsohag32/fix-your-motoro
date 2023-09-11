import { useEffect, useState } from "react";
import MidSpinner from "@/components/Spinners/MidSpinner";
import UserDashboardStats from "./UserDashboardStats";
import useAuth from "@/hooks/useAuth";

const UserSummary = () => {
  const {user} = useAuth();
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fya-backend.vercel.app/api/v1/auth/users/summary/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);
        setLoading(false);
      });
  }, [user]);

  return (
    <div>
      {loading ? (
        <MidSpinner />
      ) : (
        <UserDashboardStats
        totalWorkOrder={chartData.totalWorkOrder}
        totalSuccessOrder={chartData.totalSuccessOrder}
        pendingOrder={chartData.pendingOrder}
        totalPostponOrder={chartData.totalPostponOrder}
        approvedOrder={chartData.approvedOrder}
        />
      )}
    </div>
  );
};

export default UserSummary;
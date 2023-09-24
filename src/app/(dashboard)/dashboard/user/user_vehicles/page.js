import UserVehicles from "@/components/dashboard/UserDashboard/UserVehicles";

export const metadata = {
  title: "FYM | Dashboard | My Vehicles",
  description: "FYM Dashboard",
};

const UserVehiclesPage = () => {
  return (
    <div>
      <UserVehicles />
    </div>
  );
};

export default UserVehiclesPage;

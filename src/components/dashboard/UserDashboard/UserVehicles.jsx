"use client"
import useCars from "@/hooks/useCars";
import Spinner from "@/components/Spinners/Spinner";
import VehicleCard from "./VehicleCard";

const UserVehicles = () => {
  const { carsData, carLoading, refetch } = useCars();

  return (
    <div className="min-h-screen p-5 mt-10 md:p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Vehicle Inventory
        </h2>
        {carLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {carsData.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserVehicles;

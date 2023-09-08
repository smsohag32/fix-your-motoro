const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold">{vehicle.brand}</h3>
        <p className="text-gray-600">{vehicle.model}</p>
        <p className="text-gray-600">{vehicle.car_name}</p>
      </div>
    </div>
  );
};

export default VehicleCard;

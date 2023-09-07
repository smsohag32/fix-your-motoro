const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold">{vehicle.brand}</h3>
        <p className="text-gray-600">{vehicle.model}</p>
        <p className="text-gray-600">{vehicle.car_name}</p>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Details:</h4>
          <ul className="list-disc list-inside mt-2">
            <li>Model: {vehicle.model}</li>
            <li>Brand: {vehicle.brand}</li>
            <li>Car Name: {vehicle.car_name}</li>
          </ul>
        </div>
        <p className="mt-4">Price: ${vehicle.price}</p>
      </div>
    </div>
  );
};

export default VehicleCard;

import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import Map from "@/components/map/Map";


const StepTwo = ({ onNext, order }) => {
 const lat = parseFloat(order?.lat);
  const lon = parseFloat(order?.lon);
  const postion = [lat, lon];
  const hasValidPosition = !Number.isNaN(lat) && !Number.isNaN(lon);


  return (
    <div className="text-black min-h-[80vh] flex flex-col ">
        
      <div className="bg-white border-gray-200 p-5 flex items-center gap-3 flex-col md:flex-row">
      <p className="w-full">Date: {order?.bookingDate}</p>
      <hr className="w-1/3"/>
        <p className="w-full">On Process</p>
        <hr className="w-1/3"/>
        <p className="w-full">Sedule {order?.status || 'pending'}</p>
      </div>
      <div>
        {hasValidPosition ? (
          <Map title={'Workshop'} position={postion} />
        ) : (
          <EmptyState
            message={"Workshop map not share"}
            address={"https://www.google.com/maps"}
            label={"Visit Map"}
          />
        )}
      </div>
        <div className="text-center w-full mt-auto">
        <button className="primary-btn " onClick={() =>  onNext()}>Back to Details</button>
        </div>
    </div>
  );
};

export default StepTwo;
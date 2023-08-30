import Map from "@/components/map/Map";


const StepTwo = ({ onNext, order }) => {
 
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
        <Map title={order?.streetAddress}/>
      </div>
        <div className="text-center w-full mt-auto">
        <button className="primary-btn " onClick={() =>  onNext()}>Back to Details</button>
        </div>
    </div>
  );
};

export default StepTwo;


import '@/components/PagesSection/Dasboard/UpComeAppt/tracking.modules.css'
const StepTwo = ({ onNext, order }) => {
 

  return (
    <div className="text-black min-h-[30vh] flex flex-col ">
      
      <div className="flex flex-col items-center gap-3 p-5 bg-white border-gray-200 md:flex-row">
      <p className="w-full">Date: {order?.bookingDate}</p>
      <hr className="w-1/3"/>
        <p className="w-full ">On Process</p>
        <hr className="w-1/3"/>
        <p className="w-full">Sedule {order?.status || 'pending'}</p>
      </div>
      <div>

      </div>
        <div className="w-full mt-auto text-center">
        <button className="primary-btn " onClick={() =>  onNext()}>Back to Details</button>
        </div>
    </div>
  );
};

export default StepTwo;
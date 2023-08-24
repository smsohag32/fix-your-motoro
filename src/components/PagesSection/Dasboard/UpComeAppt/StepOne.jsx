
const StepOne = ({ onNext, order }) => {
    console.log(order);
    
    const {_id, email, firstName, lastName, phone, workshop_email, vehicle,service_category, state, bookingDate} = order||{}
    const handleNext = () => {
   onNext()
}; 
  return (
    <div className="">
      <div className="bg-white border-gray-200 p-5">
      <div className="px-4 sm:px-0">
    <h3 className="text-base font-semibold leading-7 text-gray-900">Details Information</h3>
    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{service_category} Appointment Details</p>
    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Appointment Date {bookingDate} </p>
  </div>

  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{firstName}  {lastName}</dd>
      </div>
      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {email}</dd>
      </div>
      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{phone}</dd>
      </div>
      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{state}</dd>
      </div>
      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Service</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{service_category}</dd>
      </div>
      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Vehicle</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle}</dd>
      </div>
      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Workshop Email</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{workshop_email}</dd>
      </div>
      </div>
      
     <div className="w-full mt-8 text-center">
     <button onClick={handleNext} className="primary-btn">Check Status</button>
     </div>
    </div>
  );
};

export default StepOne;
import Spinner from "@/components/Spinners/Spinner";
import useWorkshopMechanic from "@/hooks/useWorkshopMechanic";
import { RiOrderPlayFill } from "react-icons/ri";

const WorkshopOverview = () => {
  const email = "sohagsheik32@gmail.com";
  const { workshopMechanics, wOLoading } = useWorkshopMechanic(email);

  if (wOLoading) {
    return <Spinner />;
  }

  if (!workshopMechanics) {
    return <div>Error fetching data</div>;
  }
  console.log(workshopMechanics);
  return (
    <div className="text-center">
      <h2 className="primary-text font-bold text-3xl my-4">
        Workshop Mechanic Data
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        <div className="p-4 border-2 rounded-lg bg-slate-100 border-green-400 md:max-w-xl sm:max-w-lg mx-auto flex flex-col justify-center items-center gap-5">
          <div className="flex justify-around items-center gap-5">
            <RiOrderPlayFill className="text-teal-500 font-bold" />
            <p className="text-slate-500 font-semibold tracking-wide">
              Total Work Order
            </p>
          </div>
          <p className="text-6xl text-teal-500 font-extrabold tracking-wider">
            {workshopMechanics.totalWorkOrder}
          </p>
        </div>
        <div className="p-4 border-2 rounded-lg bg-slate-100 border-green-400 md:max-w-xl sm:max-w-lg mx-auto flex flex-col justify-center items-center gap-5">
          <div className="flex justify-around items-center gap-5">
            <RiOrderPlayFill className="text-teal-500 font-bold" />
            <p className="text-slate-500 font-semibold tracking-wide">
              Complete Order
            </p>
          </div>
          <p className="text-6xl text-teal-500 font-extrabold tracking-wider">
            {workshopMechanics.completeOrder}
          </p>
        </div>
        <div className="p-4 border-2 rounded-lg bg-slate-100 border-green-400 md:max-w-xl sm:max-w-lg mx-auto flex flex-col justify-center items-center gap-5">
          <div className="flex justify-around items-center gap-5">
            <RiOrderPlayFill className="text-teal-500 font-bold" />
            <p className="text-slate-500 font-semibold tracking-wide">
              Pending Order
            </p>
          </div>
          <p className="text-6xl text-teal-500 font-extrabold tracking-wider">
            {workshopMechanics.pendingOrder}
          </p>
        </div>
        <div className="p-4 border-2 rounded-lg bg-slate-100 border-green-400 md:max-w-xl sm:max-w-lg mx-auto flex flex-col justify-center items-center gap-5">
          <div className="flex justify-around items-center gap-5">
            <RiOrderPlayFill className="text-teal-500 font-bold" />
            <p className="text-slate-500 font-semibold tracking-wide">
              Postponed Order
            </p>
          </div>
          <p className="text-6xl text-teal-500 font-extrabold tracking-wider">
            {workshopMechanics.totalPostponOrder}
          </p>
        </div>
        <div className="p-4 border-2 rounded-lg bg-slate-100 border-green-400 md:max-w-xl sm:max-w-lg mx-auto flex flex-col justify-center items-center gap-5">
          <div className="flex justify-around items-center gap-5">
            <RiOrderPlayFill className="text-teal-500 font-bold" />
            <p className="text-slate-500 font-semibold tracking-wide">
              Approved Order
            </p>
          </div>
          <p className="text-6xl text-teal-500 font-extrabold tracking-wider">
            {workshopMechanics.approvedOrder}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopOverview;

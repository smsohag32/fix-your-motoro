import WorkshopStats from "@/components/PagesSection/Dasboard/Overview/WorkshopSummary/WorkshopStats";
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
  return (
    <WorkshopStats
      totalWorkOrder={workshopMechanics.totalWorkOrder}
      pendingOrder={workshopMechanics.pendingOrder}
      totalPostponOrder={workshopMechanics.totalPostponOrder}
      completeOrder={workshopMechanics.completeOrder}
      approvedOrder={workshopMechanics.approvedOrder}
    />
  );
};

export default WorkshopOverview;

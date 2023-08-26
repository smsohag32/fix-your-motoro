"use client";
import TitleDashboard from "@/components/Shared/TitleDashboard/TitleDashboard";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useWorkshops from "@/hooks/useWorkshops";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import WorkshopCard from "./WorkshopCard";
import { useRouter } from "next/navigation";

const PopularWorkShop = () => {
  const { workshops, wLoading } = useWorkshops();
  const router = useRouter();

  if (wLoading) {
    return <MidSpinner />;
  }

  return (
    <div>
      <TitleDashboard title={"Workshop"} />
      <div className=" grid grid-cols-1 gap-5">
        {workshops.slice(0, 3).map((item) => (
          <WorkshopCard key={item._id} workshopsData={item} />
        ))}
      </div>
      <div className="text-end w-full mt-8">
        <button
          onClick={() => router.push(`/workshops`)}
          className="outline-btn"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default PopularWorkShop;

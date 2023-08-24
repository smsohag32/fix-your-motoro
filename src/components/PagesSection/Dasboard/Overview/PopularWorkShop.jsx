"use client"
import TitleDashboard from "@/components/Shared/TitleDashboard/TitleDashboard";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useWorkshops from "@/hooks/useWorkshops";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import WorkshopCard from "./WorkshopCard";


const PopularWorkShop = () => {
    const {workshops, wLoading} = useWorkshops();
    console.log(workshops);

    if(wLoading) {
        return <MidSpinner/>
    }

    return (
        <div>
            <TitleDashboard title={'Workshop'}/>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
              {workshops.slice(0,3).map(item => <WorkshopCard key={item._id} workshopsData={item}/>)}
            </div>
            <div className="">
                <button onClick={() => router.replace(`/workshop/${_id}`)} className="primary-btn">Details</button>
              </div>
        </div>
    );
};

export default PopularWorkShop;
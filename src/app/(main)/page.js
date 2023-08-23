import BestProducts from "@/components/PagesSection/Home/BestProducts/BestProducts";
import CarCareTips from "@/components/PagesSection/Home/CarCareTips/CarCareTips";
import Categories from "@/components/PagesSection/Home/Categories/Categories";
import GetInTouch from "@/components/PagesSection/Home/GetInTouch/GetInTouch";
import Hero from "@/components/PagesSection/Home/Hero/Hero";
import NearWorkshop from "@/components/PagesSection/Home/NearWorkshop/NearWorkshop";
import OurExperts from "@/components/PagesSection/Home/OurExperts/OurExperts";
import OurServices from "@/components/PagesSection/Home/OurServices/OurServices";
import RecentNews from "@/components/PagesSection/Home/RecentNews/RecentNews";
import SpecialsOffers from "@/components/PagesSection/Home/SpecialOffers/SpecialsOffers";
import SuccessReviews from "@/components/PagesSection/Home/SuccessReviews/SuccessReviews";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <NearWorkshop />
      <OurExperts />
      <OurServices />
      <SuccessReviews />
      <BestProducts />
      <RecentNews />
      <CarCareTips />
      <GetInTouch />
    </main>
  );
};

export default HomePage;

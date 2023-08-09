import CarCareTips from "@/components/PagesSection/Home/CarCareTips/CarCareTips";
import Categories from "@/components/PagesSection/Home/Categories/Categories";
import GetInTouch from "@/components/PagesSection/Home/GetInTouch/GetInTouch";
import Hero from "@/components/PagesSection/Home/Hero/Hero";
import OurExperts from "@/components/PagesSection/Home/OurExperts/OurExperts";
import OurServices from "@/components/PagesSection/Home/OurServices/OurServices";
import RecentNews from "@/components/PagesSection/Home/RecentNews/RecentNews";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <OurExperts />
      <Categories />
      <OurServices />
      <CarCareTips />
      <RecentNews />
      <GetInTouch />
    </main>
  );
};

export default HomePage;

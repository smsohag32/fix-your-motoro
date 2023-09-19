'use client'
import BestProducts from "@/components/PagesSection/Home/BestProducts/BestProducts";
import GetInTouch from "@/components/PagesSection/Home/GetInTouch/GetInTouch";
import Hero from "@/components/PagesSection/Home/Hero/Hero";
import NearWorkshop from "@/components/PagesSection/Home/NearWorkshop/NearWorkshop";
import OurExperts from "@/components/PagesSection/Home/OurExperts/OurExperts";
import OurServices from "@/components/PagesSection/Home/OurServices/OurServices";
import RecentNews from "@/components/PagesSection/Home/RecentNews/RecentNews";
import SuccessReviews from "@/components/PagesSection/Home/SuccessReviews/SuccessReviews";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { useTheme } from "@/context/ThemeContext";

const HomePage = () => {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';
  return (
    <main className={themeClass}>
      <Hero />
      <NearWorkshop />
      <OurExperts />
      <OurServices />
      <SuccessReviews />
      <BestProducts>
        <SectionTitle
          title="Top-selling products"
          subTitle="Discover the most sought-after products that keep your vehicles running smoothly."
        />
      </BestProducts>
      <RecentNews />
      <GetInTouch />
    </main>
  );
};

export default HomePage;

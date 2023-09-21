
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";

export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function MainLayout({ children }) {
  
  return (
    <>
      <div className={`min-h-[67vh] `}>
        <Header />
        <div >{children}</div>
        <Footer />
      </div>
    </>
  );
}
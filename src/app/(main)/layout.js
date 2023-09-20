'use client'
import Header from "@/components/Shared/Header/Header";
import { useTheme } from "@/context/ThemeContext";
import Footer from "@/components/Shared/Footer/Footer";

export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function MainLayout({ children }) {
  
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';
  return (
    <>
      <div className={`min-h-[67vh] ${themeClass}`}>
        <Header />
        <div >{children}</div>
        <Footer />
      </div>
    </>
  );
}
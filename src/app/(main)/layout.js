import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";
import { ThemeProviders } from "../../context/ThemeProvider";

export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function MainLayout({ children, theme }) {
  
  return (
    <>
      <div className={`min-h-[67vh] ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}
        style={{
          backgroundColor: theme === 'dark' ? 'var(--background)' : 'inherit',
          color: theme === 'dark' ? 'var(--foreground)' : 'inherit',
        }}
        >
        <Header />
        <ThemeProviders theme={theme}><div >{children}</div></ThemeProviders>
        
        <Footer />
      </div>
    </>
  );
}
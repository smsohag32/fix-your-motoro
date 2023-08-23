import SideNavbar from "@/components/dashboard/SideNavbar/SideNavbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <SideNavbar/>
      <div className="">{children}</div>
    </div>
  );
}

import Sidebar from "@/components/dashboard/SideBar/Sidebar";
import DashboardTopBar from "@/components/dashboard/Topbar/DashboardTopBar";
import PrivateRote from "@/utils/PrivateRote";
import { Inter } from "next/font/google";
import { FaSearch } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function RootLayout({ children }) {
  return (
    <PrivateRote>
      <div className={inter.className}>
        <div className="relative min-h-screen md:flex">
          <Sidebar />
          <div className="flex-1 md:ml-72 bg-slate-200">
            <DashboardTopBar />
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </PrivateRote>
  );
}

import Sidebar from "@/components/dashboard/SideBar/Sidebar";
import { Inter } from "next/font/google";
import { FaSearch } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <div className="relative min-h-screen md:flex ">
        {/* <div className="w-1/3"> */}
          <Sidebar />
        {/* </div> */}
        <div className="flex-1">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

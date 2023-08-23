import Sidebar from "@/components/dashboard/SideBar/Sidebar";
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
<<<<<<< HEAD
    <div className={inter.className}>
      <div className="relative min-h-screen md:flex ">
        {/* <div className="w-1/3"> */}
          <Sidebar />
        {/* </div> */}
        <div className="flex-1">
          <div>{children}</div>
=======
    <PrivateRote>
      <div className={inter.className}>
        <div className="relative min-h-screen md:flex">
          <Sidebar />

          <div className="flex-1 md:ml-40 md:pl-20 bg-slate-200">
            <div className="p-5">{children}</div>
          </div>
>>>>>>> 177dcef6418116a2e19be41b9d9784a4ae5f4232
        </div>
      </div>
    </PrivateRote>
  );
}

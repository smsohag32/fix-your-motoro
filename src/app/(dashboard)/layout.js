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
    <div className="mt-10 mx-5">
      <div className="flex">
        <div className="w-1/3">
          <Sidebar />
        </div>
        <div className="w-2/3">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              {/* Search field */}
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2  rounded-md border border-gray-300"
              />
              {/* Search icon */}
              <FaSearch className="absolute right-3 top-2 h-6 w-6 text-gray-400" />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

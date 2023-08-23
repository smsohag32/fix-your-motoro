import Sidebar from "@/components/dashboard/SideBar/Sidebar";
import PrivateRote from "@/utils/PrivateRote";
import { Inter } from "next/font/google";
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

          <div className="flex-1 md:ml-40 md:pl-20 bg-slate-200">
            <div className="p-5">{children}</div>
          </div>
        </div>
      </div>
    </PrivateRote>
  );
}

import Sidebar from "@/components/dashboard/SideBar/Sidebar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <Sidebar/>
      <div className="">{children}</div>
    </div>
  );
}

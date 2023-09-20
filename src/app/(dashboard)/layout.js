import Sidebar from "@/components/dashboard/SideBar/Sidebar";
import DashboardTopBar from "@/components/dashboard/Topbar/DashboardTopBar";

export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1 md:ml-72 bg-slate-200">
        <div className="fixed top-0 left-0 right-0 z-50">
          <DashboardTopBar />
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
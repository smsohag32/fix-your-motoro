import Link from "next/link";

const Sidebar = () => {
  const isAgent = true;
  const isUser = false;
  return (
    <div className="flex flex-col gap-5 bg-red-200">
      <Link href="/dashboard/workshop">
        WorkShop
      </Link>
      <Link href="/dashboard/profile">
        Profile
      </Link>
      <Link href="/dashboard/product">
        Product
      </Link>
      <Link href="/dashboard/service">
        Service
      </Link>
      <Link href="/dashboard/technician">
        Technician
      </Link>
    </div>
  );
};

export default Sidebar;

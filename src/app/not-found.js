import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className=" w-full h-full flex items-center flex-col justify-center">
        <span className="text-5xl md:text-7xl primary-text">
          <MdErrorOutline />
        </span>
        <p className="mt-2 text-lg opacity-75">
          Could not find requested resource
        </p>
        <Link href="/" className="primary-btn mt-5">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

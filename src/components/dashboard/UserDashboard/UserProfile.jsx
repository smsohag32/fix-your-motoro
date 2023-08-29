import Link from "next/link";

const UserProfile = () => {
  return (
    <div>
      <Link
        className="primary-btn"
        href={"/dashboard/user/user_profile/center_req"}
      >
        Become a Workshop Center
      </Link>
    </div>
  );
};

export default UserProfile;

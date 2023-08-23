import Link from "next/link";

const AdminLink = () => {
  return (
    <>
      <li>
        {" "}
        <Link> Booked Services </Link>{" "}
      </li>
      <li>
        {" "}
        <Link> Write Blog </Link>{" "}
      </li>
      <li>
        {" "}
        <Link> Manage Users </Link>{" "}
      </li>
      <li>
        {" "}
        <Link> Manage Technicians </Link>{" "}
      </li>
      <li>
        {" "}
        <Link> Manage Workshops </Link>{" "}
      </li>
      <li>
        {" "}
        <Link> Reviews </Link>{" "}
      </li>
      <li>
        {" "}
        <Link> Payment History </Link>{" "}
      </li>
    </>
  );
};

export default AdminLink;

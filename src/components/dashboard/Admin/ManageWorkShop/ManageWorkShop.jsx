"use client";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from "axios";
import useWorkshops from "@/hooks/useWorkshops";
import Spinner from "@/components/Spinners/Spinner";

const ManageWorkshop = () => {
  const { workshops, wLoading, refetch } = useWorkshops();

  const handleConfirm = async (workshop) => {
    const newStatus = "confirm";
    const apiUrl = `https://fya-backend.vercel.app/api/v1/auth/workshops/status/${workshop._id}`;
    try {
      await axios.patch(apiUrl, { status: newStatus });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Workshop Approved",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch (error) {
      console.error("Error confirming workshop:", error);
    }
  };

  const handleDisable = async (workshop) => {
    const newStatus = "disabled";
    const apiUrl = `https://fya-backend.vercel.app/api/v1/auth/workshops/status/${workshop._id}`;
    try {
      await axios.patch(apiUrl, { status: newStatus });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Workshop Disabled",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch (error) {
      console.error("Error disabling workshop:", error);
    }
  };

  const handleDelete = (workshop) => {
    const url = `https://fya-backend.vercel.app/api/v1/auth/workshops/${workshop?._id}`;
    try {
      Swal.fire({
        title: "Are you sure?",
        text: `Do you want to delete ${workshop?.name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(url).then((re) => {
            Swal.fire("Deleted!", "Workshop is deleted done");
            refetch();
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen px-5 md:px-8 bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Manage Workshops
        </h2>
        {wLoading ? (
          <Spinner />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-5 tracking-wider">
                    Workshops
                  </th>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-5 tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-5 tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {workshops.map((workshop) => (
                  <tr key={workshop._id}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-20 overflow-hidden flex items-center h-20">
                          <Image
                            src={workshop.image || ""}
                            alt="Workshop Image"
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold">{workshop.name}</div>
                          <div className="text-sm text-gray-600">
                            {workshop.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <span
                        className={`px-2 py-1 text-xs text-white rounded-full ${
                          workshop?.status === "confirm"
                            ? "bg-blue-500"
                            : workshop?.status === "pending"
                            ? "bg-green-400"
                            : workshop?.status === "disabled"
                            ? "bg-orange-500"
                            : ""
                        }`}
                      >
                        {workshop.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap space-x-2">
                      <button
                        onClick={() => handleConfirm(workshop)}
                        disabled={workshop.status === "confirm"}
                        className={`${
                          workshop.status === "confirm"
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-green-500 hover:bg-green-600"
                        } text-white font-semibold px-4 py-2 rounded-md`}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDisable(workshop)}
                        disabled={workshop.status === "disabled"}
                        className={`${
                          workshop.status === "disabled"
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-yellow-500 hover:bg-yellow-600"
                        } text-white font-semibold px-4 py-2 rounded-md`}
                      >
                        Disable
                      </button>
                      <button
                        onClick={() => handleDelete(workshop)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageWorkshop;

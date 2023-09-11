import ManageWorkShop from "@/components/dashboard/Admin/ManageWorkShop/ManageWorkShop";
import Image from "next/image";

const ManageWorkShopPage = () => {
  const { workshops, wLoading, refetchWorkshops } = useWorkshops();
  // console.log(workshops);

  // confirm function
  const handleConfirm = (workshop) => {
    const newStatus = "confirm";
    const requestBody = JSON.stringify({ status: newStatus });
    const apiUrl = `https://fya-backend.vercel.app/api/v1/auth/workshops/status/${workshop._id}`;

    fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Workshop status updated successfully:", data);
        refetchWorkshops();
      })
      .catch((error) => {
        console.error("Error updating workshop status:", error);
      });
  };

  // Disable function
  const handleDisable = (workshop) => {
    const newStatus = "disabled";
    const requestBody = JSON.stringify({ status: newStatus });
    const apiUrl = `https://fya-backend.vercel.app/api/v1/auth/workshops/status/${workshop._id}`;

    fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Workshop status updated successfully:", data);
        refetchWorkshops();
      })
      .catch((error) => {
        console.error("Error updating workshop status:", error);
      });
  };

  // delete function
  const handleDelete = () => {
    alert("handle delete");
  };

  if (wLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="default-container ">
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>WorkShops </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workshops.map((workshop) => (
              <tr key={workshop._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={workshop.image || ""}
                          alt="Description of the image"
                          width={300}
                          height={200}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{workshop.name}</div>
                      <div className="text-sm opacity-50">
                        {workshop.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span>{workshop.status} </span>
                </td>
                <td className="">
                  <button
                    onClick={() => handleConfirm(workshop)}
                    disabled={workshop.status === "confirm" ? true : false}
                    className="btn btn-outline btn-success btn-xs"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDisable(workshop)}
                    disabled={workshop.status == "disabled" ? true : false}
                    className="btn btn-outline btn-success btn-xs"
                  >
                    Disable
                  </button>
                  <button
                    onClick={() => handleDelete(workshop)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageWorkShopPage;

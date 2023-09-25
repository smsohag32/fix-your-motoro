const ComplaintCard = ({ complaint }) => {

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-full cursor-pointer">
      <h2 className="text-lg font-semibold text-gray-800">
        {complaint.complaintType}
      </h2>
      <p className="text-gray-600 mt-2">
        <strong>Complaint by:</strong> {complaint.complainantEmail}
      </p>
      <p className="text-gray-600">
        <strong>Complaint against:</strong> <span className="text-red-500">{complaint.subjectEmail}</span>
      </p>
      <p className="text-gray-700 mt-2">{complaint.complaintDetails}</p>
    </div>
  );
};

export default ComplaintCard;

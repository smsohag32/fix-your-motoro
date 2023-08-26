import React, { useState } from "react";
import Modal from "react-modal";
import { Toaster, toast } from "react-hot-toast";

const EmailModal = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform email sending logic here
    // Clear form fields
    setEmail("");
    setMessage("");
    e.target.reset();
    {
      closeModal;
    }
    toast.success("Your email has been sent successfully");
  };

  const customStyles = {
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "600px" /* Adjust the width as needed */,
      height: "800px" /* Adjust the height as needed */,
      backgroundColor: "#f2f2f2" /* Adjust the background color as needed */,
      border: "1px solid #ddd" /* Add borders if desired */,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Article Modal"
      style={customStyles}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Send an Email</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </Modal>
  );
};

export default EmailModal;

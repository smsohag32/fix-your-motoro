import React from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const notify = () =>
    toast("This Service Has been booked successfully.......");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    notify();
    form.reset();
  };

  return (
    <>
      <div className="mt-32 max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Work Order Request</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Jason"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Momoa"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="json.momoa@gamil.com"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="+8801............"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium">
              Vehicle Details
            </label>
            <input
              type="text"
              id="company"
              name="vehicle"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Toyota Land Cruiser Prado - 2020"
              required
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-medium">Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="postal" className="block text-sm font-medium">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal"
                  name="postal"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
          </div>
          {/* ... More form fields */}

          <div className="md:flex justify-between">
            <button type="submit" className="primary-btn rounded-md">
              Submit
            </button>
            <Toaster />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 font-semibold tracking-wider py-2 rounded-md hover:bg-blue-600"
            >
              Print
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;

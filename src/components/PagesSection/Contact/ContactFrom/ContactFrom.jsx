const ContactFrom = () => {
  return (
    <div className="min-h-full px-2 py-4 mx-4 mt-2 rounded-lg shadow-lg md:w-2/4 lg:px-8 shadow-black">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            name="name"
            type="text"
            required
            className="block w-full primary-input"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            name="email"
            type="email"
            required
            className="block w-full primary-input "
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Message
          </label>
        </div>
        <div className="mt-2">
          <textarea
            required
            className="block w-full primary-input "
            name=""
            rows="4"
            cols="50"
          />
        </div>
      </div>
      <input type="submit" className="w-full primary-btn mt-3" />
    </div>
  );
};

export default ContactFrom;

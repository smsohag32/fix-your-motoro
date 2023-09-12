import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="mx-auto  md:w-2/4 px-5">
      <h1 className="font-semibold uppercase text-slate-500 ">contact us</h1>
      <h1 className="mt-4 text-3xl font-semibold ">Get In Touch</h1>
      <p className="mt-6 text-gray-800">
        Have some big idea or brand to develop and need help? Then reach out wed
        love to hear about your project and provide help
      </p>
      <div className="grid justify-center gap-2 mx-auto mt-10 md:gap-8 md:grid-cols-3">
        <div className="mx-auto text-center">
          <FaHome className="mx-auto text-7xl primary-text" />
          <p className="text-2xl">Address:</p>
          <p className="text-center">123 Street, City</p>
        </div>

        <div className="text-center">
          <FaPhoneAlt className="mx-auto mb-4 text-6xl primary-text" />
          <p className="text-2xl">Phone:</p>
          <p className="text-center">(123) 456-7890</p>
        </div>

        <div className="text-center">
          <MdOutlineMail className="mx-auto text-7xl primary-text" />
          <p className="text-2xl">Email:</p>
          <p className="text-center">info@fixyourmotornow.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

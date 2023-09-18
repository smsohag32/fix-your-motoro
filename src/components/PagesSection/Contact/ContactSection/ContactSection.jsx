import { MdOutlineMail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="px-5 mx-auto md:w-2/4 md:mt-24">
      <div>
        <h1 className="text-5xl font-semibold">Let's chat. <br />
          Tell me about your <br />
          Service.</h1>
        <p className="mt-4 font-semibold text-slate-400">Let's create something together</p>
      </div>
      <div className="flex items-center w-6/12 gap-6 p-2 mt-6 rounded-md md:ml-12 bg-slate-100">
        <MdOutlineMail className="p-2 text-5xl bg-gray-200 rounded-md" />
        <div>
          <p className="font-semibold">Mail me at</p>
          <p className="font-semibold primary-text">fym@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

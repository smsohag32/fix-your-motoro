import { MdOutlineMail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="px-5 mx-auto md:w-2/4 md:mt-24">
      <div>
        <h1 className="text-5xl font-semibold">Let's chat.</h1>
        <p className="text-3xl">
          Tell us about <br /> 
          your problem.</p>
        <p className="mt-4 font-semibold text-slate-400">Let's find out solution together</p>
      </div>
        <div>
      <div className="flex items-center border gap-6 p-2 mt-6 rounded-md md:ml-12 bg-slate-100 group hover:border-[#69d94f]">
        <MdOutlineMail className="p-2 text-5xl bg-gray-200 rounded-md border group-hover:text-[#69d94f]" />
        <div>
          <p className="font-semibold">Mail us at</p>
          <p className="font-semibold primary-text">fym@gmail.com</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactSection;

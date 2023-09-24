import UpcomeAppointment from "@/components/dashboard/UserDashboard/UpcomeAppointment";

export const metadata = {
  title: "FYM | Dashboard | Appointment",
  description: "FYM Dashboard Appointment",
};

const UpAppointmentPage = () => {
  return (
    <div className="md:my-16">
      <UpcomeAppointment />
    </div>
  );
};

export default UpAppointmentPage;

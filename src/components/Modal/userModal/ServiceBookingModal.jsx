import Modal from "../Modal";

const ServiceBookingModal = ({isOpen, setIsOpen}) => {
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Select Payment Method">
      <div className="">
        <h1>Hello</h1>
      </div>
    </Modal>
  );
};

export default ServiceBookingModal;



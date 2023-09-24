import Modal from "../Modal";

const ServicePaymentModal = ({isOpen, setIsOpen}) => {
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Select Payment Method">
      <div className="">
        <h1>Hello</h1>
      </div>
    </Modal>
  );
};

export default ServicePaymentModal;



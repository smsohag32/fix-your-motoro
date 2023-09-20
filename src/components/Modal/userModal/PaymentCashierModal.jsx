import { useState } from "react";
import Modal from "../Modal";
import sslcommerzeImg from "@/assets/sllcommerze.webp";
import cashonDeliveryImg from "@/assets/cashon.jpg";
import Image from "next/image";

const PaymentCashierModal = ({ isOpen, setIsOpen, refetch, PaymentWithSLLCommerze, CashOnDelivery, totalPayment, totalQuantity, vat, shippingFee, totalPrice }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cashOnDelivery");

  const onCancel = () => {
    setIsOpen(false);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = () => {
    if (selectedPaymentMethod === "cashOnDelivery") {
      CashOnDelivery();
    } else if (selectedPaymentMethod === "sslcommerz") {
      PaymentWithSLLCommerze();
    }
  };

  const [isUSD, setIsUSD] = useState(true);
  const totalPaymentUSD = totalPayment;
  const totalPaymentBDT = totalPayment * 100;
  const toggleCurrency = () => {
    setIsUSD(!isUSD);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Select Payment Method">
      <div className="">
        <div className="flex gap-4">
          <div>
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentMethod"
              value="cashOnDelivery"
              checked={selectedPaymentMethod === "cashOnDelivery"}
              onChange={handlePaymentMethodChange}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="cashOnDelivery" className="cursor-pointer">Cash on Delivery</label>
          </div>
          <div>
            <input
              type="radio"
              id="sslcommerz"
              name="paymentMethod"
              value="sslcommerz"
              checked={selectedPaymentMethod === "sslcommerz"}
              onChange={handlePaymentMethodChange}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="sslcommerz" className="cursor-pointer">SSLCommerz</label>
          </div>
        </div>

        {selectedPaymentMethod === "cashOnDelivery" && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Delivery Options: Cash on Delivery</h2>
            <div className="grid grid-cols-2  gap-2 mt-6">
              <div>
                <Image src={cashonDeliveryImg} alt="cashonDeliveryImg" height={250} width={370} className="border border-green-400 object-contain" />
              </div>
              <div className="border border-green-500 p-3 text-lg md:text-xl flex flex-col gap-1 text-gray-500">
                <p>Total Quantity: <span>{totalQuantity}</span></p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <p>Vat(10%): ${vat.toFixed(2)}</p>
                <p>Shipping Fee: ${shippingFee.toFixed(2)}</p>
                <div className="flex items-center justify-between">
                  <h1>Total Payment: <span className="text-red-500">{isUSD ? `$${totalPaymentUSD.toFixed(2)}` : `৳${totalPaymentBDT.toFixed(2)}`}</span></h1>
                  <button
                    onClick={toggleCurrency}
                    className="text-[12px] bg-green-600 text-white p-1 border rounded-md"
                  >
                    {isUSD ? "View BDT" : "View USD"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedPaymentMethod === "sslcommerz" && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Delivery Options: SSLCommerz</h2>
            <div className="grid grid-cols-2  gap-2 mt-6">
              <div>
                <Image src={sslcommerzeImg} alt="sslcommerzeImg" height={250} width={370} className="border border-green-400 object-contain" />
              </div>
              <div className="border border-green-500 p-3 text-lg md:text-xl flex flex-col gap-1 text-gray-500">
                <p>Total Quantity: <span>{totalQuantity}</span></p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <p>Vat(10%): ${vat.toFixed(2)}</p>
                <p>Shipping Fee: ${shippingFee.toFixed(2)}</p>
                <div className="flex items-center justify-between">
                  <h1>Total Payment: <span className="text-red-500">{isUSD ? `$${totalPaymentUSD.toFixed(2)}` : `৳${totalPaymentBDT.toFixed(2)}`}</span></h1>
                  <button
                    onClick={toggleCurrency}
                    className="text-[12px] bg-green-600 text-white p-1 border rounded-md"
                  >
                    {isUSD ? "View BDT" : "View USD"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handlePaymentSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit Payment
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentCashierModal;



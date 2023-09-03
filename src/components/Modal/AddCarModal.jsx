import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AddCarModal = ({
  handleAddCar,
  closeModal,
  isOpen,
  register,
  handleSubmit,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-gray-300 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-center text-gray-900"
                >
                  Add to your new Car
                </Dialog.Title>
                <form onSubmit={handleSubmit(handleAddCar)} className="mt-4">
                  <div>
                    <input
                      type="text"
                      id="car_name"
                      name="car_name"
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                      placeholder="Enter your car name"
                      required
                      {...register("car_name")}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                      placeholder="Enter car brand"
                      required
                      {...register("brand")}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="model"
                      name="model"
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                      placeholder="Enter car model"
                      required
                      {...register("model")}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center border border-transparent rounded-md primary-btn"
                    >
                      Save Cars
                    </button>
                  </div>
                </form>
                <hr className="mt-8 " />
                <div className="flex justify-around mt-2">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-transparent border border-transparent rounded-md primary-text hover:text-white hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddCarModal;

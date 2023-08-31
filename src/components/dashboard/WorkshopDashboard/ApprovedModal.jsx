import UserModal from "@/components/Modal/Modal";
import statusChange from "@/utils/statusChange";
import { useForm } from "react-hook-form";

const ApprovedModal = ({isOpen, setIsOpen, id }) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const newData = {
            status: 'approved',
            ...data
        }
        statusChange({newData, id}).then(data => {
            onCancel();
            console.log(data);
        }).catch(error => console.log(error))
    }

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }


    return (
        <UserModal isOpen={isOpen} setIsOpen={setIsOpen} title={'Confirm to Appointment'}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="lat" className="mb-2 font-bold">Latitude * </label>
                        <input type="text" id="lat" className="w-full rounded-md p-2  focus:outline-sky-500 border border-gray-600" placeholder="Workshop Latitude" required {...register("lat")} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lon" className="mb-2 font-bold">Longitude *</label>
                        <input type="lon" id="lon" placeholder="Workshop longitude" typeof="text" className="w-full rounded-md p-2  focus:outline-sky-500 border border-gray-600" required {...register("lon")} />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 font-bold">Message</label>
                        <textarea cols='3' rows='2' type="text" id="message" className="w-full rounded-md p-2  focus:outline-sky-500 border border-gray-600" placeholder="message" required {...register("message")} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="technicaian" className="mb-2 font-bold">Technicaian</label>
                        <select className="w-full rounded-md p-2  focus:outline-sky-500 border border-gray-600" id="technicaian" {...register("technicaian")}>
                            <option defaultValue="Male">Rakib Hossain</option>
                            <option value="Female">Monir Ahmed</option>
                            <option value="Other">Tomal Khan</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center gap-4 mt-10 ">
                <button type="submit" className="w-full md:w-auto px-3 py-2 text-center transition-all duration-500 font-semibold bg-sky-600 text-white hover:bg-sky-800 rounded-lg">Approved</button>
                    <button onClick={() => onCancel()} type="button" className="primary-btn">Cancel</button>
                   
                </div>
            </form>
        </UserModal>
    );
};

export default ApprovedModal;
import { useForm } from "react-hook-form"
import Modal from "../Modal"
import useAuth from "@/hooks/useAuth";
import Image from "next/image";



const UserUpdateProfileModal = ({ isOpen, setIsOpen }) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        onCancel();
    }

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Update Your Profile">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center">
                    <Image className="rounded-full ring-2 ring-[#f02801] mb-8" src={user?.photoURL} alt="user_profile" width={130} height={130} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-bold">Name</label>
                        <input type="text" id="name" className="w-full rounded-md p-2  focus:outline-sky-500 border border-gray-600" placeholder="your name" required {...register("name")} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-bold">Email</label>
                        <input type="email" id="email" className="w-full rounded-md p-2  focus:outline-sky-500 border border-gray-600" value={user?.email} required {...register("email")} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="mb-2 font-bold">Phone</label>
                        <input type="number" id="phone" className="w-full rounded-md p-2  focus:outline-sky-500 border border-gray-600" placeholder="+880" required {...register("phone")} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="mb-2 font-bold">Address</label>
                        <input type="text" id="address" className="w-full rounded-md p-2  focus:outline-sky-500 border border-gray-600" placeholder="address" required {...register("address")} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="gender" className="mb-2 font-bold">Gender</label>
                        <select className="w-full rounded-md p-2  focus:outline-sky-500 border border-gray-600" id="gender" {...register("gender")}>
                            <option defaultValue="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">other</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="image" className="mb-2 font-bold">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"

                            className="w-full rounded-md p-1 focus:outline-sky-500 border border-gray-600"
                        /> 
                     </div>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={() => onCancel()} type="button" className="delete-btn rounded-lg w-full md:w-auto">Cancel</button>
                    <button type="submit" className="w-full md:w-auto px-3 py-2 text-center transition-all duration-500 font-semibold bg-sky-600 text-white hover:bg-sky-800 rounded-lg">Update</button>
                </div>
            </form>
        </Modal>
    )
}

export default UserUpdateProfileModal;
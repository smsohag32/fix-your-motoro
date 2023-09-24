import { useForm } from "react-hook-form"
import Modal from "../Modal"
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import UploadImage from "@/components/UploadImage/UploadImage";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";


const UserUpdateProfileModal = ({ isOpen, setIsOpen, refetch }) => {
    const { user, profileUpdate } = useAuth();
    const { register, handleSubmit, reset, setValue } = useForm();


    const onSubmit = async (data) => {

        console.log(data);
       const updateData = {
            name: user?.displayName,
            email: user?.email,
            image: data.image,
            phone: data.phone,
            address: data.address,
            gender: data.gender
        }
        try {
            const response = await axios.put(`https://fya-backend.vercel.app/api/v1/auth/users/${user?.email}`, updateData);
            await profileUpdate({
                displayName: user?.displayName,
                photoURL: data.image,
            });

            refetch();
            toast.success("profile updated successfully")
            onCancel();
        } catch (error) {
            console.log(error);
            toast.error("profile not updated.")
        }
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-bold">Name</label>
                        <input type="text" id="name" className="w-full rounded-md p-2  focus:outline-[#69d94f] border border-gray-600"
                            value={user?.displayName}
                            required {...register("name")}
                            disabled />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-bold">Email</label>
                        <input type="email" id="email" className="w-full rounded-md p-2  focus:outline-[#69d94f] border border-gray-600" value={user?.email} required {...register("email")
                        } disabled />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="mb-2 font-bold">Phone</label>
                        <input type="number" id="phone" className="w-full rounded-md p-2  focus:outline-[#69d94f] border border-gray-600" placeholder="+880" required {...register("phone")} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="mb-2 font-bold">Address</label>
                        <input type="text" id="address" className="w-full rounded-md p-2  focus:outline-[#69d94f] border border-gray-600" placeholder="address" required {...register("address")} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="gender" className="mb-2 font-bold">Gender</label>
                        <select className="w-full rounded-md p-2  focus:outline-[#69d94f] border border-gray-600" id="gender" {...register("gender")}>
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
                            onChange={(e) => UploadImage(e, setValue)}
                            className="w-full rounded-md p-1 focus:outline-[#69d94f] border border-gray-600"
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={() => onCancel()} type="button" className="w-full rounded-lg delete-btn md:w-auto">Cancel</button>
                    <button type="submit" className="w-full px-3 py-2 font-semibold text-center text-white transition-all duration-500 rounded-lg md:w-auto bg-sky-600 hover:bg-sky-800">Update</button>
                </div>
                <Toaster />
            </form>
        </Modal>
    )
}

export default UserUpdateProfileModal;
import { toast } from "react-hot-toast";

const UploadImage = async (event, setValue) => {
  const formData = new FormData();
  if (!event.target.files[0]) return;
  formData.append("image", event.target.files[0]);
  const toastId = toast.loading("Image uploading...");
  try {
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!res.ok) throw new Error("Failed to upload image");

    const data = await res.json();
    toast.dismiss(toastId);
    toast.success("Image loaded successfully!");
    
    // Set the image URL in your form data using setValue
    setValue("image", data.data.url);
  } catch (error) {
    toast.error("Image not loaded!");
    toast.dismiss(toastId);
  }
};

export default UploadImage;

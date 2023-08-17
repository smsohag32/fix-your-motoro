import { connectToDB } from "@/dbConfig/dbConfig";
import WorkshopInfo from "@/modules/WorkshopInfo";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const workshop = await WorkshopInfo.findById(params.id);
    return new Response(JSON.stringify(workshop), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("failed to fetch", { status: 500 });
  }
};

import { connectToDB } from "@/dbConfig/dbConfig";
import WorkshopInfo from "@/modules/WorkshopInfo";

export const GET = async (request) => {
  try {
    await connectToDB();
    const workshopData = await WorkshopInfo.find({});
    return new Response(JSON.stringify(workshopData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};

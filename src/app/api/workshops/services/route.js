import { connectToDB } from "@/dbConfig/dbConfig";
import WorkshopInfo from "@/modules/WorkshopInfo";

export const GET = async (request) => {
  try {
    await connectToDB();
    const servicesData = await WorkshopInfo.find({}, { services: 1, _id: 0 });
    return new Response(JSON.stringify(servicesData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};

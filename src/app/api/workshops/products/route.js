import { connectToDB } from "@/dbConfig/dbConfig";
import WorkshopInfo from "@/modules/WorkshopInfo";

export const GET = async (request) => {
  try {
    await connectToDB();
    const productsData = await WorkshopInfo.find({}, { products: 1, _id: 0 });
    return new Response(JSON.stringify(productsData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};

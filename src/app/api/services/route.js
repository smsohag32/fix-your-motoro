import { connectToDB } from "@/dbConfig/dbConfig";
import services from "@/modules/services";

export const GET = async (request) => {
  try {
    await connectToDB();
    const servicesData = await services.find({});
    if (!servicesData)
      return new Response("services data not found", { status: 404 });
    return new Response(JSON.stringify(servicesData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data ", { status: 500 });
  }
};

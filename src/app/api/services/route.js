import { connectToDB } from "@/dbConfig/dbConfig";
import services from "@/modules/services";

export const GET = async (request) => {
  try {
    await connectToDB();

    const category = request.nextUrl.searchParams.get("service_category");
    const query = category ? { service_category: category } : {};
    const servicesData = await services.find(query);

    if (!servicesData || servicesData.length === 0) {
      return new Response("Services not found", { status: 404 });
    }

    return new Response(JSON.stringify(servicesData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};

import { connectToDB } from "@/dbConfig/dbConfig";
import services from "@/modules/services";

export const GET = async (request) => {
  try {
    await connectToDB();
    const queryParams = new URLSearchParams(request.url);
    const category = queryParams.get("services_category");
    const query = category ? { service_category: category } : {};
    console.log(category);

    const servicesData = await services.find(query);

    if (!servicesData)
      return new Response("services not found", { status: 404 });

    return new Response(JSON.stringify(servicesData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};

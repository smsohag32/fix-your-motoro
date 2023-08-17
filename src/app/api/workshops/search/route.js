import { connectToDB } from "@/dbConfig/dbConfig";
import WorkshopInfo from "@/modules/WorkshopInfo";

export const GET = async (request) => {
  try {
    await connectToDB();
    const location = request.nextUrl.searchParams.get("location");
    console.log(location);
    const query = location ? { location: location } : {};
    const workshopData = await WorkshopInfo.find(query);
    if (!workshopData || workshopData.length === 0) {
      return new Response("Workshops not found", { status: 404 });
    }
    return new Response(JSON.stringify(workshopData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};

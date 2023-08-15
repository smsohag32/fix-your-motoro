import { connectToDB } from "@/dbConfig/dbConfig";
import experts from "@/modules/experts";

export const GET = async (request) => {
  try {
    await connectToDB();
    const expert = await experts.find({});
    if (!expert) return new Response("Experts not found", { status: 404 });
    return new Response(JSON.stringify(expert), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data ", { status: 500 });
  }
};

import { connectToDB } from "@/dbConfig/dbConfig";
import BlogsInfo from "@/modules/blogsInfo";

export const GET = async (request) => {
  try {
    await connectToDB();
    const blogs = await BlogsInfo.find({});
    if (!blogs) return new Response("blogs not found", { status: 404 });
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data ", { status: 500 });
  }
};

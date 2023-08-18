import { connectToDB } from "@/dbConfig/dbConfig";
import products from "@/modules/ProductsInfo";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const service = await products.findById(params.id);
    return new Response(JSON.stringify(service), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 500 });
  }
};

import { connectToDB } from "@/dbConfig/dbConfig";
import products from "@/modules/ProductsInfo";
export const GET = async (request) => {
  try {
    await connectToDB();
    const productsData = await products.find({});
    if (!productsData)
      return new Response("productsData not found", { status: 404 });
    return new Response(JSON.stringify(productsData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data ", { status: 500 });
  }
};

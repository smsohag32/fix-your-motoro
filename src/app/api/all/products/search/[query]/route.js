import { connectToDB } from "@/dbConfig/dbConfig";
import products from "@/modules/ProductsInfo";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const indexKey = { productName: 1 };
    const indexOptions = [{ key: indexKey, name: "productSearchName" }];
    const indexResult = await products.createIndexes(indexOptions);
    const searchText = params.query;

    const productData = await products.find({
      name: { $regex: searchText, $options: "i" },
    });
    return new Response(JSON.stringify(productData), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 500 });
  }
};

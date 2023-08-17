import { connectToDB } from "@/dbConfig/dbConfig";
import workOrders from "@/modules/WorkOrders";

export const POST = async (request) => {
  const order = await request.json();
  try {
    await connectToDB();
    const newOrder = new workOrders(order);
    await newOrder.save();
    return new Response(
      JSON.stringify({ message: "New order successfully done" }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response("Failed to post data ", { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    await connectToDB();
    const ordersData = await workOrders.find({});
    if (!ordersData)
      return new Response("Order Data not found not found", { status: 404 });
    return new Response(JSON.stringify(ordersData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data ", { status: 500 });
  }
};

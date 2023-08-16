import { connectToDB } from "@/dbConfig/dbConfig";
import usersInfo from "@/modules/usersInfo";

export const GET = async (request) => {
  try {
    await connectToDB();
    const users = await usersInfo.find({});
    if (!users) return new Response("users not found", { status: 404 });
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data ", { status: 500 });
  }
};

export const POST = async (request) => {
  const user = await request.json();
  try {
    await connectToDB();
    const newUser = new BookInfo(user);
    await newUser.save();

    return new Response(JSON.stringify({ message: "User created cuss" }), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to post data ", { status: 500 });
  }
};

import { connectToDB } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  await connectToDB();
  return NextResponse.json({ status: "server is running" });
};

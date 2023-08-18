import { connectToDB } from "@/dbConfig/dbConfig";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async (request) => {
  await connectToDB();
  return NextResponse.json({ status: "server is running" });
};
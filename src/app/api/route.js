import { connectToDB } from "@/dbConfig/dbConfig";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async (request) => {
  await connectToDB();
  return NextResponse.json({ status: "server is running" });
};


export const POST = async (res) => {
  const body = await res.json();
  const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
  )
  const alg = 'HS256'

  const jwt = await new SignJWT(body)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    // .setIssuer('urn:example:issuer')
    // .setAudience('urn:example:audience')
    .setExpirationTime('90d')
    .sign(secret)

    cookies().set({
      name: "jwt-token",
      value: `Bearer ${jwt}`,
      secure: true,
      httOnly: true
    })

    return NextResponse.json({message: 'Token created'})
}
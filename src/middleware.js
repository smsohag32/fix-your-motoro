  // import { jwtVerify } from 'jose';
  // import { NextResponse } from 'next/server'

  // // This function can be marked `async` if using `await` inside
  // export const middleware = async (request) => {
  //     const { pathname } = request.nextUrl;
  //     try {
  //         let cookie = request.cookies.get('jwt-token')?.value;
  //         if (!cookie || !cookie.startsWith("Bearer")) throw new Error("Invalid Token")
  //         const secret = new TextEncoder().encode(
  //             'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
  //         )
  //         await jwtVerify(cookie.split("Bearer")[1], secret)
  //         return NextResponse.next()
  //     } catch (error) {
  //         return NextResponse.redirect(new URL(`/login?redirectUrl=${pathname}`, request.url))
  //     }
  // }

  // // See "Matching Paths" below to learn more
  // export const config = {
  //     matcher: ['/gallery/:path*'],
  // }

  import { NextResponse } from 'next/server'
   
  // This function can be marked `async` if using `await` inside
  export function middleware(request) {
    return NextResponse.redirect(new URL('/home', request.url))
  }
   
  // See "Matching Paths" below to learn more
  export const config = {
    matcher: '/about/:path*',
  }
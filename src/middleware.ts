import NextAuth from 'next-auth';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
    const pathName=request.nextUrl.pathname;
    console.log(pathName)
    const session=false;

    if(pathName.startsWith('/Dashboard'))
    {
        if(session)
        {
          return  NextResponse.next();
        }
    
    else
    {
        return    NextResponse.rewrite(new URL('/Login',request.url))
    }
}
    return NextResponse.next()

 }
 
export const config = {
    matcher: ["/client-route/:path*","/Dashboard/:path*"],
  };
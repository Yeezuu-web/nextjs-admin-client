import { getAuthCredentials } from "@/utils/auth-utils";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/register" || path === "/";

  const cookie = request.cookies.get("AUTH_CRED");

  if (cookie && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard/home", request.url));
  }
  if (!cookie && !isPublicPath) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register", "/"],
};

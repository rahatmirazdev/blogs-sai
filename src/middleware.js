import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { pathname } = req.nextUrl;

  if (!user && pathname !== "/api/auth/login") {
    const url = req.nextUrl.clone();
    url.pathname = "/api/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"]
};
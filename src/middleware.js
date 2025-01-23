import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { isAuthenticated } = await getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const roleAccess: Record<string, string[]> = {
  "/administration": ["ADMIN"],
  "/teachers": ["TEACHER", "ADMIN"],
  "/students": ["STUDENT", "ADMIN"],
  "/accountants": ["ACCOUNTANT", "ADMIN"],
  "/guardians": ["GUARDIAN", "ADMIN"],
  "/committee": ["COMMITTEE", "ADMIN"],
  "/admission": ["ADMISSION", "ADMIN"],
};

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("user")?.value;
  const pathname = req.nextUrl.pathname;

  const isLogin = pathname.startsWith("/login");

  // 🔐 not logged in
  if (!cookie && !isLogin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isLogin) return NextResponse.next();

  let user;

  try {
    user = JSON.parse(cookie || "{}");
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const role = user?.role;

  const matchRoute = Object.keys(roleAccess).find((route) =>
    pathname.startsWith(route)
  );

  if (matchRoute) {
    const allowed = roleAccess[matchRoute];

    if (!allowed.includes(role)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/administration/:path*",
    "/teachers/:path*",
    "/students/:path*",
    "/accountants/:path*",
    "/guardians/:path*",
    "/committee/:path*",
    "/admission/:path*",
  ],
};
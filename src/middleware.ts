import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("userToken")?.value;
  const { pathname } = request.nextUrl;

  // защищённые роуты
  const protectedRoutes = ["/personal-information"];

  // если пользователь НЕ залогинен и идёт на защищённый роут
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // если пользователь залогинен и идёт на /login | /recover-password | /register
  if (
    token &&
    (pathname === "/login" ||
      pathname === "/recover-password" ||
      pathname === "/register")
  ) {
    return NextResponse.redirect(
      new URL("/personal-information", request.url)
    );
  }

  // иначе пропускаем
  return NextResponse.next();
}

// 🔧 указываем пути, где должен работать middleware
export const config = {
  matcher: [
    "/personal-information/:path*",
    "/login",
    "/register",
    "/recover-password",
  ],
};

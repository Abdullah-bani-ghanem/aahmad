// const { NextResponse } = require("next/server");
// const jwt = require("jsonwebtoken");

// async function middleware(req) {
//   // استخراج التوكن من Cookie
//   const token = req.cookies.get("token")?.value;
//   console.log("Token from Cookie in Middleware:", token);

//   if (!token) {
//     console.log("No token found, redirecting to login");
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   try {
//     // التحقق من التوكن
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("User decoded from token:", user);

//     if (!user || !["doctor", "nurse"].includes(user.role)) {
//       console.log("Invalid user or role, redirecting to login");
//       return NextResponse.redirect(new URL("/login", req.url));
//     }

//     // تعيين بيانات المستخدم في الرأس
//     const response = NextResponse.next();
//     response.headers.set("x-user", JSON.stringify(user));
//     console.log("x-user header set:", response.headers.get("x-user"));
//     return response;
//   } catch (error) {
//     console.error("Token verification failed:", error.message);
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }

// module.exports = middleware;

// module.exports.config = {
//   matcher: ["/provider-dashboard/:path*"], // تأكد من تطابق المسار
// };







import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_PATHS = ["/", "/login", "/register", "/about", "/contact"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  // السماح بالصفحات العامة
  if (PUBLIC_PATHS.includes(pathname) || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // لا يوجد توكن = إعادة توجيه لتسجيل الدخول
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const role = decoded.role;

    // توجيه حسب الدور
    if (pathname === "/dashboard") {
      if (role === "admin") {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
      }
      if (role === "doctor") {
        return NextResponse.redirect(new URL("/provider-dashboard", request.url));
      }
      if (role === "patient") {
        return NextResponse.redirect(new URL("/profile", request.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"], // تجاهل ملفات النظام
};

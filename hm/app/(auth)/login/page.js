// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// // import { signIn } from "next-auth/react";

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         setError(data.error);
//       } else {
//         if (data.user.role === "admin") {
//           router.push("/dashboard/admin");
//         } else {
//           router.push("/");
//         }
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   const handleGoogleLogin = () => {
//     // Trigger Google login via NextAuth
//     // signIn("google");
//     console.log("Google login clicked");
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
//       <div className="w-full max-w-md">
//         {/* Card */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
//           {/* Header with branded accent */}
//           <div className="h-3 bg-gradient-to-r from-pink-500 to-pink-600"></div>

//           {error && (
//             <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 text-sm flex items-center gap-2">
//               <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path
//                   fillRule="evenodd"
//                   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span>{error}</span>
//             </div>
//           )}

//           <div className="p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//               Welcome Back
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-600 mb-1"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
//                   placeholder="you@example.com"
//                 />
//               </div>

//               <div>
//                 <div className="flex justify-between items-center mb-1">
//                   <label
//                     htmlFor="password"
//                     className="text-sm font-medium text-gray-600"
//                   >
//                     Password
//                   </label>
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
//                   placeholder="••••••••"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-pink-600 hover:bg-pink-500 text-white py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
//               >
//                 Sign In
//               </button>
//             </form>

//             <div className="mt-6">
//               <div className="relative mb-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="bg-white px-4 text-gray-600">
//                     Or sign in with
//                   </span>
//                 </div>
//               </div>
//               <button
//                 onClick={handleGoogleLogin}
//                 className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-gray-800 transition shadow-sm"
//               >
//                 <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
//                   <path
//                     d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z"
//                     fill="#4285F4"
//                   />
//                 </svg>
//                 Sign in with Google
//               </button>
//             </div>
//           </div>

//           <div className="text-center bg-gray-50 p-4 border-t border-gray-200">
//             <p className="text-sm text-gray-600">
//               Don't have an account?
//               <a
//                 href="/register"
//                 className="ml-1 text-pink-600 hover:text-pink-500 font-medium"
//               >
//                 Create one
//               </a>
//             </p>
//           </div>
//         </div>

//         <p className="mt-6 text-center text-xs text-gray-600">
//           © 2025 All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// }






"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error);
      } else {
        // ✅ توجيه حسب الدور
        const role = data.user.role;

        if (role === "admin") {
          router.push("/admin-dashboard");
        } else if (role === "doctor") {
          router.push("/provider-dashboard");
        } else {
          router.push("/profile");
        }
      }
    } catch (err) {
      setError("حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="h-3 bg-gradient-to-r from-pink-500 to-pink-600"></div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 text-sm flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              مرحباً بعودتك 👋
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-1">
                  كلمة المرور
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-500 text-white py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
              >
                تسجيل الدخول
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              ليس لديك حساب؟
              <a href="/register" className="ml-1 text-pink-600 hover:text-pink-500 font-medium">
                إنشاء حساب
              </a>
            </div>
          </div>

          <div className="text-center bg-gray-50 p-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">© 2025 جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

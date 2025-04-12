"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" dir="rtl">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <svg
                className="h-10 w-10 ml-2 text-pink-600"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 20C50 20 40 35 25 35C10 35 10 50 10 50C10 50 10 65 25 65C40 65 50 80 50 80C50 80 60 65 75 65C90 65 90 50 90 50C90 50 90 35 75 35C60 35 50 20 50 20Z"
                  fill="currentColor"
                  fillOpacity="0.2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
              </svg>
              <div className="text-xl font-bold text-pink-600">
                لمسات الجمال
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              نحن نقدم خدمات تجميلية متكاملة بأعلى المعايير العالمية. فريقنا من
              الخبراء متخصص في العناية بالبشرة وعلاجات التجميل المتقدمة لمساعدتك
              على إبراز جمالك الطبيعي.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/specialists"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  الأخصائيون
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  معرض الصور
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/appointment"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  احجز موعد
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              خدماتنا
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/facial"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  علاجات الوجه
                </Link>
              </li>
              <li>
                <Link
                  href="/services/laser"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  جلسات الليزر
                </Link>
              </li>
              <li>
                <Link
                  href="/services/botox"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  حقن البوتوكس والفيلر
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hair"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  علاجات الشعر
                </Link>
              </li>
              <li>
                <Link
                  href="/services/body"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  علاجات الجسم
                </Link>
              </li>
              <li>
                <Link
                  href="/services/all"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  جميع الخدمات
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              تواصل معنا
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 ml-2 text-pink-600 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="text-gray-600">
                  شارع الأمير سلطان، حي الزهراء
                  <br />
                  جدة، المملكة العربية السعودية
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 ml-2 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <p className="text-gray-600" dir="ltr">
                  +966 12 345 6789
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 ml-2 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="text-gray-600">info@beauty-clinic.com</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 ml-2 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="text-gray-600">
                  السبت - الخميس: 10:00 ص - 9:00 م
                </p>
              </div>

              {/* Newsletter Subscribe */}
              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  اشترك في النشرة البريدية
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="px-3 py-2 border border-gray-300 rounded-r-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-l-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500">
                    اشتراك
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} لمسات الجمال. جميع الحقوق محفوظة
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 space-x-reverse justify-center md:justify-start">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-gray-500 hover:text-pink-600"
                  >
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-gray-500 hover:text-pink-600"
                  >
                    الشروط والأحكام
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-500 hover:text-pink-600"
                  >
                    الأسئلة الشائعة
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

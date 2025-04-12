"use client";

import React from "react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="bg-white" dir="rtl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="h-80 bg-pink-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن هنا لمساعدتك! تواصلوا معنا للحجز أو الاستفسار عن خدماتنا
              التجميلية.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white"></div>
      </div>

      {/* Contact Form and Info Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:space-x-8 lg:space-x-reverse">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                أرسل رسالتك
              </h2>
              <div className="bg-pink-50 w-20 h-1 mb-6"></div>
              <form className="bg-white rounded-lg shadow-md p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      الاسم
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                      placeholder="أدخل اسمك"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                  </div>
                </div>
                {/* Phone */}
                <div className="mt-6">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                    placeholder="أدخل رقم هاتفك"
                    required
                  />
                </div>
                {/* Message */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                    placeholder="اكتب رسالتك هنا..."
                    required
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-500 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-8 lg:mt-0 lg:w-1/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                معلومات الاتصال
              </h2>
              <div className="bg-pink-50 w-20 h-1 mb-6"></div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-pink-600 ml-3"
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
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        عنواننا
                      </h3>
                      <p className="text-gray-600">
                        شارع الملك عبدالعزيز، الرياض، المملكة العربية السعودية
                      </p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-pink-600 ml-3"
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
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        رقم الهاتف
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:+966123456789"
                          className="hover:text-pink-600"
                        >
                          +966 123 456 789
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-pink-600 ml-3"
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
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        البريد الإلكتروني
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:info@beautycenter.com"
                          className="hover:text-pink-600"
                        >
                          info@beautycenter.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
}

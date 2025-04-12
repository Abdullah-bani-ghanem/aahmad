"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white" dir="rtl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="h-80 bg-pink-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">من نحن</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مركز لمسات الجمال - رحلتنا نحو الجمال والثقة بالنفس، معكم منذ أكثر
              من عشر سنوات
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white"></div>
      </div>

      {/* Our Story Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-8 lg:space-x-reverse">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">قصتنا</h2>
              <div className="bg-pink-50 w-20 h-1 mb-6"></div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                بدأت رحلة مركز لمسات الجمال في عام 2013 كحلم صغير لمؤسسته
                الدكتورة سارة الخالدي، استشارية الجلدية والتجميل، التي آمنت بأن
                الجمال ليس مجرد مظهر خارجي بل هو إشعاع داخلي ينبع من الثقة
                بالنفس.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                منذ افتتاح المركز، وضعنا نصب أعيننا هدفاً واضحاً وهو تقديم أحدث
                العلاجات التجميلية والطبية بأعلى مستويات الجودة والأمان، مع
                التركيز على النتائج الطبيعية التي تعزز الثقة بالنفس لدى عملائنا.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                على مر السنين، توسع مركزنا ليضم نخبة من الاستشاريين والأخصائيين
                في مختلف مجالات التجميل والعناية بالبشرة، وأصبحنا اليوم واحداً
                من أبرز المراكز المتخصصة في المملكة العربية السعودية.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
                <img
                  src="/img/our-story.jpg"
                  alt="فريق العمل في مركز لمسات الجمال"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <svg
                  className="w-10 h-10 text-pink-600 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">رؤيتنا</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                نسعى لأن نكون المركز الرائد في مجال الجمال والعناية بالبشرة في
                المملكة العربية السعودية، من خلال تقديم خدمات عالية الجودة تجمع
                بين أحدث التقنيات العالمية والخبرة الطبية المتميزة، لنساعد كل
                شخص على إظهار جماله الطبيعي وتعزيز ثقته بنفسه.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <svg
                  className="w-10 h-10 text-pink-600 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">رسالتنا</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                تتمثل رسالتنا في تقديم برامج علاجية وتجميلية متكاملة بأعلى
                المعايير العالمية، مع التركيز على سلامة وراحة عملائنا، وذلك من
                خلال فريق من الأطباء والمتخصصين ذوي الخبرة، الذين يستخدمون أحدث
                التقنيات في بيئة آمنة ومريحة، لمساعدة عملائنا على تحقيق أفضل
                النتائج التي تعكس جمالهم الطبيعي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">قيمنا</h2>
            <div className="bg-pink-50 w-20 h-1 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              في مركز لمسات الجمال، نلتزم بمجموعة من القيم الأساسية التي توجه
              عملنا وتعاملنا مع عملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-50 rounded-full p-6 inline-flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">السلامة</h3>
              <p className="text-gray-600">
                نضع سلامة عملائنا في مقدمة أولوياتنا، ونتبع أعلى معايير السلامة
                والتعقيم في جميع إجراءاتنا
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-50 rounded-full p-6 inline-flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">الابتكار</h3>
              <p className="text-gray-600">
                نواكب أحدث التقنيات والعلاجات في مجال التجميل والعناية بالبشرة
                لتقديم أفضل النتائج لعملائنا
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-50 rounded-full p-6 inline-flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">التخصص</h3>
              <p className="text-gray-600">
                يضم فريقنا نخبة من الأطباء والأخصائيين المدربين على أعلى مستوى
                في مختلف مجالات التجميل
              </p>
            </div>
          </div>
        </div>
      </section>

  

      {/* Certifications and Awards */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              شهاداتنا واعتماداتنا
            </h2>
            <div className="bg-pink-50 w-20 h-1 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              حصل مركز لمسات الجمال على العديد من الشهادات والاعتمادات الدولية
              التي تعكس التزامنا بأعلى معايير الجودة والسلامة في تقديم خدمات
              التجميل والعناية بالبشرة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Certification 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <img
                  src="/img/certifications/iso-9001.png"
                  alt="شهادة ISO 9001"
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                شهادة ISO 9001
              </h3>
              <p className="text-gray-600">
                شهادة الجودة الدولية التي تثبت التزامنا بأعلى معايير الإدارة
                والخدمات.
              </p>
            </div>

            {/* Certification 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <img
                  src="/img/certifications/jci.png"
                  alt="اعتماد JCI"
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                اعتماد JCI
              </h3>
              <p className="text-gray-600">
                اعتماد اللجنة الدولية المشتركة لضمان جودة الرعاية الصحية وسلامة
                المرضى.
              </p>
            </div>

            {/* Award 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <img
                  src="/img/certifications/best-clinic-2022.png"
                  alt="جائزة أفضل مركز تجميل 2022"
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                جائزة أفضل مركز تجميل 2022
              </h3>
              <p className="text-gray-600">
                حصلنا على جائزة أفضل مركز تجميل في الاردن  لعام
                2022.
              </p>
            </div>

            {/* Award 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <img
                  src="/img/certifications/excellence-award.png"
                  alt="جائزة التميز في الخدمات الطبية"
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                جائزة التميز في الخدمات الطبية
              </h3>
              <p className="text-gray-600">
                تم تكريمنا بجائزة التميز لتقديم خدمات طبية متميزة في مجال
                التجميل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            انضم إلينا اليوم
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            جربي تجربة الجمال الحقيقية مع مركز لمسات الجمال. احجزي موعدك الآن
            ودعينا نساعدك على إبراز جمالك الطبيعي.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-500 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <span>احجز موعدك الآن</span>
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}


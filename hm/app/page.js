// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function Home() {
//   const [activeTab, setActiveTab] = useState("treatments");

//   const services = [
//     {
//       name: "علاجات الوجه",
//       description: "أحدث تقنيات تجديد البشرة وإشراقتها",
//       image: "/images/services/facial-treatment.jpg",
//     },
//     {
//       name: "إزالة الشعر بالليزر",
//       description: "تقنيات متطورة لإزالة الشعر بشكل دائم",
//       image: "/images/services/laser-hair-removal.jpg",
//     },
//     {
//       name: "حقن البوتوكس والفيلر",
//       description: "تقليل التجاعيد واستعادة نضارة البشرة",
//       image: "/images/services/botox-fillers.jpg",
//     },
//     {
//       name: "التقشير الكيميائي",
//       description: "تحسين ملمس البشرة وتوحيد لونها",
//       image: "/images/services/chemical-peel.jpg",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "سارة",
//       text: "غيرت العيادة بشرتي تماماً. أشعر بثقة أكبر من أي وقت مضى!",
//       image: "/images/testimonials/testimonial-1.jpg",
//     },
//     {
//       name: "ليلى",
//       text: "فريق محترف ونتائج مذهلة. أنصح الجميع بتجربة العيادة!",
//       image: "/images/testimonials/testimonial-2.jpg",
//     },
//     {
//       name: "أحمد",
//       text: "كانت جلسة البوتوكس سريعة وغير مؤلمة، والنتائج طبيعية جداً.",
//       image: "/images/testimonials/testimonial-3.jpg",
//     },
//   ];

//   const experts = [
//     {
//       name: "د. نور الحكيم",
//       specialty: "طبيب تجميل",
//       image: "/images/experts/doctor-1.jpg",
//     },
//     {
//       name: "د. سمير العلي",
//       specialty: "أخصائي ليزر",
//       image: "/images/experts/doctor-2.jpg",
//     },
//     {
//       name: "أ. ياسمين خالد",
//       specialty: "أخصائية علاج البشرة",
//       image: "/images/experts/doctor-3.jpg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
//       {/* Hero Section */}
//       <section className="relative py-20">
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <Image
//             src="/images/hero-background.jpg"
//             alt="Beauty Clinic Hero"
//             fill
//             style={{ objectFit: "cover", objectPosition: "center" }}
//             priority
//           />
//         </div>

//         <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-pink-600 bg-opacity-80 px-4 py-2 rounded">
//             جمالك يبدأ هنا
//           </h2>
//           <p className="text-xl text-white max-w-2xl mb-10 bg-pink-600 bg-opacity-80 px-4 py-2 rounded">
//             نقدم لك أحدث تقنيات التجميل وعلاجات البشرة بأيدي خبراء متخصصين
//           </p>
//           <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
//             احجز موعدًا
//           </button>
//         </div>
//       </section>

//       {/* Featured Services */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             خدماتنا المميزة
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-pink-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
//               >
//                 <div className="h-48 relative">
//                   <Image
//                     src={service.image}
//                     alt={service.name}
//                     fill
//                     style={{ objectFit: "cover" }}
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {service.name}
//                   </h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Before/After Gallery */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             نتائج مذهلة
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-lg overflow-hidden shadow-sm">
//               <div className="relative h-80">
//                 <Image
//                   src="/images/before-after/before-after-1.jpg"
//                   alt="Before and After"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <h3 className="font-semibold text-gray-800">علاج حب الشباب</h3>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg overflow-hidden shadow-sm">
//               <div className="relative h-80">
//                 <Image
//                   src="/images/before-after/before-after-2.jpg"
//                   alt="Before and After"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <h3 className="font-semibold text-gray-800">
//                   شد الوجه غير الجراحي
//                 </h3>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg overflow-hidden shadow-sm">
//               <div className="relative h-80">
//                 <Image
//                   src="/images/before-after/before-after-3.jpg"
//                   alt="Before and After"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <h3 className="font-semibold text-gray-800">تجديد البشرة</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tabs Section */}
//       <section className="py-16 bg-pink-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="flex border-b border-gray-200 mb-8">
//               <button
//                 className={`px-6 py-3 text-lg font-medium ${
//                   activeTab === "treatments"
//                     ? "text-pink-600 border-b-2 border-pink-600"
//                     : "text-gray-600"
//                 }`}
//                 onClick={() => setActiveTab("treatments")}
//               >
//                 العلاجات
//               </button>
//               <button
//                 className={`px-6 py-3 text-lg font-medium ${
//                   activeTab === "products"
//                     ? "text-pink-600 border-b-2 border-pink-600"
//                     : "text-gray-600"
//                 }`}
//                 onClick={() => setActiveTab("products")}
//               >
//                 المنتجات
//               </button>
//               <button
//                 className={`px-6 py-3 text-lg font-medium ${
//                   activeTab === "experts"
//                     ? "text-pink-600 border-b-2 border-pink-600"
//                     : "text-gray-600"
//                 }`}
//                 onClick={() => setActiveTab("experts")}
//               >
//                 الخبراء
//               </button>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               {activeTab === "treatments" && (
//                 <div className="flex flex-col md:flex-row gap-6">
//                   <div className="md:w-1/3 relative h-64 md:h-auto">
//                     <Image
//                       src="/images/tabs/treatments-tab.jpg"
//                       alt="Treatments"
//                       fill
//                       style={{ objectFit: "cover", borderRadius: "0.5rem" }}
//                     />
//                   </div>
//                   <div className="md:w-2/3">
//                     <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                       علاجاتنا المتميزة
//                     </h3>
//                     <p className="text-gray-600 mb-4">
//                       نقدم مجموعة واسعة من العلاجات التجميلية المتطورة التي تلبي
//                       احتياجاتك الفردية. تم تصميم كل علاج بعناية لتحقيق أفضل
//                       النتائج مع مراعاة سلامة وراحة العميل.
//                     </p>
//                     <ul className="space-y-2 text-gray-600">
//                       <li className="flex items-start">
//                         <span className="text-pink-500 mr-2">✓</span>
//                         علاجات الوجه التخصصية
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-pink-500 mr-2">✓</span>
//                         حقن البوتوكس والفيلر
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-pink-500 mr-2">✓</span>
//                         تقنيات شد الوجه غير الجراحية
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "products" && (
//                 <div className="flex flex-col md:flex-row gap-6">
//                   <div className="md:w-1/3 relative h-64 md:h-auto">
//                     <Image
//                       src="/images/tabs/products-tab.jpg"
//                       alt="Products"
//                       fill
//                       style={{ objectFit: "cover", borderRadius: "0.5rem" }}
//                     />
//                   </div>
//                   <div className="md:w-2/3">
//                     <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                       منتجاتنا الحصرية
//                     </h3>
//                     <p className="text-gray-600 mb-4">
//                       نوفر مجموعة مختارة من منتجات العناية بالبشرة عالية الجودة
//                       التي تكمل علاجاتنا وتساعدك على الحفاظ على نتائج مثالية في
//                       المنزل.
//                     </p>
//                     <ul className="space-y-2 text-gray-600">
//                       <li className="flex items-start">
//                         <span className="text-pink-500 mr-2">✓</span>
//                         مستحضرات تنظيف متخصصة
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-pink-500 mr-2">✓</span>
//                         سيروم مضاد للشيخوخة
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-pink-500 mr-2">✓</span>
//                         منتجات حماية من الشمس
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "experts" && (
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                     خبراؤنا المتخصصون
//                   </h3>
//                   <p className="text-gray-600 mb-6">
//                     يضم فريقنا نخبة من أطباء التجميل والمتخصصين ذوي الخبرة
//                     العالية والمؤهلات المعتمدة دوليًا.
//                   </p>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {experts.map((expert, index) => (
//                       <div key={index} className="text-center">
//                         <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full">
//                           <Image
//                             src={expert.image}
//                             alt={expert.name}
//                             fill
//                             style={{ objectFit: "cover" }}
//                           />
//                         </div>
//                         <h4 className="text-lg font-semibold text-gray-800">
//                           {expert.name}
//                         </h4>
//                         <p className="text-pink-600">{expert.specialty}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             آراء عملائنا
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-pink-50 p-6 rounded-lg shadow-sm">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 relative mr-4">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       fill
//                       style={{ objectFit: "cover", borderRadius: "100%" }}
//                     />
//                   </div>
//                   <h3 className="font-semibold text-gray-800">
//                     {testimonial.name}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 italic">{testimonial.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Clinic Tour */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             جولة في العيادة
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="relative h-64">
//               <Image
//                 src="/images/clinic-tour/clinic-1.avif"
//                 alt="Clinic Tour"
//                 fill
//                 style={{ objectFit: "cover", borderRadius: "0.5rem" }}
//               />
//             </div>
//             <div className="relative h-64">
//               <Image
//                 src="/images/clinic-tour/clinic-2.jpg"
//                 alt="Clinic Tour"
//                 fill
//                 style={{ objectFit: "cover", borderRadius: "0.5rem" }}
//               />
//             </div>
//             <div className="relative h-64">
//               <Image
//                 src="/images/clinic-tour/clinic-3.jpg"
//                 alt="Clinic Tour"
//                 fill
//                 style={{ objectFit: "cover", borderRadius: "0.5rem" }}
//               />
//             </div>
//             <div className="relative h-64">
//               <Image
//                 src="/images/clinic-tour/clinic-4.jpg"
//                 alt="Clinic Tour"
//                 fill
//                 style={{ objectFit: "cover", borderRadius: "0.5rem" }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-pink-600 text-white relative">
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <Image
//             src="/images/cta-background.jpg"
//             alt="CTA Background"
//             fill
//             style={{ objectFit: "cover", objectPosition: "center" }}
//           />
//           <div className="absolute inset-0 bg-pink-600 bg-opacity-80"></div>
//         </div>

//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h2 className="text-3xl font-bold mb-6">
//             استعد لتجربة تجميلية فريدة
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             احجز موعدًا اليوم واستمتع بخصم 20% على أول زيارة
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
//             <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
//               احجز الآن
//             </button>
//             <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition duration-300">
//               تواصل معنا
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// 
"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Particles from "react-tsparticles"; // استيراد مكتبة الجزيئات
import { loadSlim } from "tsparticles-slim"; // استيراد النسخة الخفيفة من tsparticles

export default function Home() {
  const [activeTab, setActiveTab] = useState("treatments");

  const services = [
    {
      name: "علاجات الوجه",
      description: "أحدث تقنيات تجديد البشرة وإشراقتها",
      image: "/images/services/facial-treatment.jpg",
    },
    {
      name: "إزالة الشعر بالليزر",
      description: "تقنيات متطورة لإزالة الشعر بشكل دائم",
      image: "/images/services/laser-hair-removal.jpg",
    },
    {
      name: "حقن البوتوكس والفيلر",
      description: "تقليل التجاعيد واستعادة نضارة البشرة",
      image: "/images/services/botox-fillers.jpg",
    },
    {
      name: "التقشير الكيميائي",
      description: "تحسين ملمس البشرة وتوحيد لونها",
      image: "/images/services/chemical-peel.jpg",
    },
  ];

  const testimonials = [
    {
      name: "سارة",
      text: "غيرت العيادة بشرتي تماماً. أشعر بثقة أكبر من أي وقت مضى!",
      image: "/images/testimonials/testimonial-1.jpg",
    },
    {
      name: "ليلى",
      text: "فريق محترف ونتائج مذهلة. أنصح الجميع بتجربة العيادة!",
      image: "/images/testimonials/testimonial-2.jpg",
    },
    {
      name: "أحمد",
      text: "كانت جلسة البوتوكس سريعة وغير مؤلمة، والنتائج طبيعية جداً.",
      image: "/images/testimonials/testimonial-3.jpg",
    },
  ];

  const experts = [
    {
      name: "د. نور الحكيم",
      specialty: "طبيب تجميل",
      image: "/images/experts/doctor-1.jpg",
    },
    {
      name: "د. سمير العلي",
      specialty: "أخصائي ليزر",
      image: "/images/experts/doctor-2.jpg",
    },
    {
      name: "أ. ياسمين خالد",
      specialty: "أخصائية علاج البشرة",
      image: "/images/experts/doctor-3.jpg",
    },
  ];

  // إعداد الجزيئات
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  };

  // تأثيرات Parallax للـ Hero Section
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 150]);
  const yText = useTransform(scrollY, [0, 500], [0, -50]);

  // إعدادات التأثيرات الحركية للكروت
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  // إعدادات التأثيرات الحركية للنصوص
  const textVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // تأثير النبض للأزرار
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section with Particles and Wave Text */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: yBackground }}>
          <Image
            src="/images/hero-background.jpg"
            alt="Beauty Clinic Hero"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-600/70 to-transparent"></div>
        </motion.div>

        {/* Particles Effect */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 z-10"
        />

        <div className="relative z-20 text-center px-4">
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
            style={{ y: yText }}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            جمالك يتألق بأناقة
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-10 drop-shadow-md"
            style={{ y: yText }}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            اكتشفي تجربة تجميلية فاخرة مع أحدث التقنيات
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              href="/contact-us"
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              احجزي موعدك الآن
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services with 3D Tilt and Shine Effect */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            خدماتنا الفاخرة
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              >
                <div className="h-56 relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery with Interactive Comparison */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            نتائج استثنائية
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "علاج حب الشباب",
                image: "/images/before-after/before-after-1.jpg",
              },
              {
                title: "شد الوجه غير الجراحي",
                image: "/images/before-after/before-after-2.jpg",
              },
              {
                title: "تجديد البشرة",
                image: "/images/before-after/before-after-3.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-xl group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt="Before and After"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                    <h3 className="text-white font-semibold text-lg p-4">
                      {item.title}
                    </h3>
                  </div>
                  {/* Wave Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section with Dynamic Background Transition */}
      <section className="py-24 bg-pink-50 relative overflow-hidden">
        {/* Dynamic Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-50"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="flex justify-center border-b border-gray-200 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className={`px-6 py-3 text-lg font-medium rounded-t-xl transition-all duration-300 ${
                  activeTab === "treatments"
                    ? "bg-white text-pink-600 shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("treatments")}
              >
                العلاجات
              </button>
              <button
                className={`px-6 py-3 text-lg font-medium rounded-t-xl transition-all duration-300 ${
                  activeTab === "products"
                    ? "bg-white text-pink-600 shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("products")}
              >
                المنتجات
              </button>
              <button
                className={`px-6 py-3 text-lg font-medium rounded-t-xl transition-all duration-300 ${
                  activeTab === "experts"
                    ? "bg-white text-pink-600 shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("experts")}
              >
                الخبراء
              </button>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl"
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "treatments" && (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 relative h-64 md:h-auto rounded-xl overflow-hidden">
                    <Image
                      src="/images/tabs/treatments-tab.jpg"
                      alt="Treatments"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      علاجاتنا المتميزة
                    </h3>
                    <p className="text-gray-600 mb-4">
                      نقدم مجموعة واسعة من العلاجات التجميلية المتطورة التي تلبي
                      احتياجاتك الفردية. تم تصميم كل علاج بعناية لتحقيق أفضل
                      النتائج مع مراعاة سلامة وراحة العميل.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        علاجات الوجه التخصصية
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        حقن البوتوكس والفيلر
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        تقنيات شد الوجه غير الجراحية
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "products" && (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 relative h-64 md:h-auto rounded-xl overflow-hidden">
                    <Image
                      src="/images/tabs/products-tab.jpg"
                      alt="Products"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      منتجاتنا الحصرية
                    </h3>
                    <p className="text-gray-600 mb-4">
                      نوفر مجموعة مختارة من منتجات العناية بالبشرة عالية الجودة
                      التي تكمل علاجاتنا وتساعدك على الحفاظ على نتائج مثالية في
                      المنزل.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        مستحضرات تنظيف متخصصة
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        سيروم مضاد للشيخوخة
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        منتجات حماية من الشمس
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "experts" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    خبراؤنا المتخصصون
                  </h3>
                  <p className="text-gray-600 mb-6">
                    يضم فريقنا نخبة من أطباء التجميل والمتخصصين ذوي الخبرة
                    العالية والمؤهلات المعتمدة دوليًا.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {experts.map((expert, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={index}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.05, rotateX: 5 }}
                      >
                        <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-pink-200">
                          <Image
                            src={expert.image}
                            alt={expert.name}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-pink-600/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {expert.name}
                        </h4>
                        <p className="text-pink-600">{expert.specialty}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials with 3D Carousel Effect */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            آراء عملائنا
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl shadow-xl text-center relative"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <div className="w-20 h-20 relative mx-auto mb-4 rounded-full border-4 border-pink-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: "cover", borderRadius: "100%" }}
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 italic">{testimonial.text}</p>
                {/* Decorative Element */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-pink-600 rounded-full opacity-20"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Tour with Reflection and Wave Effect */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            جولة في العيادة
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "/images/clinic-tour/clinic-1.avif",
              "/images/clinic-tour/clinic-2.jpg",
              "/images/clinic-tour/clinic-3.jpg",
              "/images/clinic-tour/clinic-4.jpg",
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative h-72 rounded-2xl overflow-hidden shadow-xl group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
              >
                <Image
                  src={image}
                  alt="Clinic Tour"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Reflection Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent opacity-50"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Dynamic Wave and Pulse Effect */}
      <section className="py-24 bg-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-background.jpg"
            alt="CTA Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-800 opacity-90"></div>
          {/* Dynamic Wave Effect */}
          <motion.svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              fill="#ffffff"
              fillOpacity="0.3"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,245.3C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </motion.svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-6"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            جربي الفخامة في عالم التجميل
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            احجزي موعدك اليوم واستمتعي بخصم 20% على أول زيارة
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div variants={pulseVariants} animate="pulse">
              <Link
                href="/contact-us"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                احجزي الآن
              </Link>
            </motion.div>
            <motion.div variants={pulseVariants} animate="pulse">
              <Link
                href="/contact-us"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300"
              >
                تواصلي معنا
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

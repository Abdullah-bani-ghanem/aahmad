// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { Save, User, Phone, FileText } from 'lucide-react'

// export default function NewPatientPage() {
//   const router = useRouter()

//   const [form, setForm] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     phone: '',
//     condition: '',
//   })

//   const [loading, setLoading] = useState(false)

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       const res = await fetch('/api/patients/new', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       })

//       if (res.ok) {
//         alert('✅ تم حفظ المريض بنجاح')
//         router.push('/admin-dashboard/patients')
//       } else {
//         const error = await res.json()
//         alert('❌ فشل في حفظ المريض: ' + (error?.error || 'حدث خطأ غير متوقع'))
//       }
//     } catch (error) {
//       alert('❌ فشل الاتصال بالخادم')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div dir="rtl" className="bg-amber-50 min-h-screen p-6">
//       <div className="max-w-2xl mx-auto">
//         {/* رأس الصفحة */}
//         <div className="flex items-center mb-6">
//           <div>
//             <h1 className="text-2xl font-bold text-amber-900">إضافة مريض جديد</h1>
//             <p className="text-amber-700 mt-1">أدخل بيانات المريض الجديد للتسجيل في النظام</p>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-lg shadow-md border border-amber-100">
//           <div>
//             <label className="block mb-1 font-medium text-amber-800">الاسم الكامل</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <User size={18} className="text-amber-400" />
//               </div>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="w-full pr-10 border-amber-200 p-2 rounded-lg focus:ring-amber-500 focus:border-amber-500 bg-amber-50"
//                 placeholder="أدخل الاسم الكامل للمريض"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block mb-1 font-medium text-amber-800">العمر</label>
//               <input
//                 type="number"
//                 name="age"
//                 value={form.age}
//                 onChange={handleChange}
//                 className="w-full border-amber-200 p-2 rounded-lg focus:ring-amber-500 focus:border-amber-500 bg-amber-50"
//                 placeholder="أدخل العمر"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block mb-1 font-medium text-amber-800">الجنس</label>
//               <select
//                 name="gender"
//                 value={form.gender}
//                 onChange={handleChange}
//                 className="w-full border-amber-200 p-2 rounded-lg focus:ring-amber-500 focus:border-amber-500 bg-amber-50"
//                 required
//               >
//                 <option value="">اختر الجنس</option>
//                 <option value="ذكر">ذكر</option>
//                 <option value="أنثى">أنثى</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-medium text-amber-800">رقم الهاتف</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <Phone size={18} className="text-amber-400" />
//               </div>
//               <input
//                 type="text"
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className="w-full pr-10 border-amber-200 p-2 rounded-lg focus:ring-amber-500 focus:border-amber-500 bg-amber-50"
//                 placeholder="أدخل رقم الهاتف"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-medium text-amber-800">الحالة الطبية</label>
//             <div className="relative">
//               <div className="absolute top-2 right-3 pointer-events-none">
//                 <FileText size={18} className="text-amber-400" />
//               </div>
//               <textarea
//                 name="condition"
//                 value={form.condition}
//                 onChange={handleChange}
//                 className="w-full pt-2 pr-10 border-amber-200 p-2 rounded-lg focus:ring-amber-500 focus:border-amber-500 bg-amber-50"
//                 rows={4}
//                 placeholder="اكتب وصفاً للحالة الطبية للمريض (اختياري)"
//               ></textarea>
//             </div>
//           </div>

//           <div className="flex justify-between pt-4">
//             <button
//               type="button"
//               onClick={() => router.back()}
//               className="px-4 py-2 border border-amber-300 rounded-lg text-amber-700 hover:bg-amber-50 transition-colors"
//               disabled={loading}
//             >
//               إلغاء
//             </button>

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors shadow-md flex items-center"
//             >
//               <Save size={18} className="ml-2" />
//               {loading ? '...جاري الحفظ' : 'حفظ المريض'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, User, Phone, FileText } from "lucide-react";

export default function NewPatientPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    condition: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/tests/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("✅ تم حفظ المريض بنجاح");
        router.push("/admin-dashboard/patients");
      } else {
        const error = await res.json();
        alert("❌ فشل في حفظ المريض: " + (error?.error || "حدث خطأ غير متوقع"));
      }
    } catch (error) {
      alert("❌ فشل الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="bg-pink-50 min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        {/* رأس الصفحة */}
        <div className="flex items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              إضافة مريض جديد
            </h1>
            <p className="text-gray-600 mt-1">
              أدخل بيانات المريض الجديد للتسجيل في النظام
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-6 rounded-lg shadow-md border border-gray-200"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              الاسم الكامل
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <User size={18} className="text-pink-600" />
              </div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full pr-10 border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
                placeholder="أدخل الاسم الكامل للمريض"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-gray-600">
                العمر
              </label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                className="w-full border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
                placeholder="أدخل العمر"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-600">
                الجنس
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border-gray-900 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-white text-black"
                required
              >
                <option value="">اختر الجنس</option>
                <option value="ذكر">ذكر</option>
                <option value="أنثى">أنثى</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">
              رقم الهاتف
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Phone size={18} className="text-pink-600" />
              </div>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full pr-10 border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
                placeholder="أدخل رقم الهاتف"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">
              الحالة الطبية
            </label>
            <div className="relative">
              <div className="absolute top-2 right-3 pointer-events-none">
                <FileText size={18} className="text-pink-600" />
              </div>
              <textarea
                name="condition"
                value={form.condition}
                onChange={handleChange}
                className="w-full pt-2 pr-10 border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50 text-black"
                rows={4}
                placeholder="اكتب وصفاً للحالة الطبية للمريض (اختياري)"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              disabled={loading}
            >
              إلغاء
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors shadow-md flex items-center"
            >
              <Save size={18} className="ml-2" />
              {loading ? "...جاري الحفظ" : "حفظ المريض"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
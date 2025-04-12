// 'use client'

// import { useEffect, useState } from 'react'
// import { useParams, useRouter } from 'next/navigation'
// import { User, Phone, FileText, Calendar } from 'lucide-react'

// export default function ViewPatientPage() {
//   const { id } = useParams()
//   const router = useRouter()

//   const [patient, setPatient] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchPatient = async () => {
//       try {
//         const res = await fetch(`/api/patients/${id}`)
//         if (!res.ok) throw new Error('لم يتم العثور على بيانات المريض')
//         const data = await res.json()
//         setPatient(data)
//       } catch (err) {
//         alert('❌ خطأ في تحميل بيانات المريض')
//         router.push('/admin-dashboard/patients')
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (id) fetchPatient()
//   }, [id, router])

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-amber-50">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
//       </div>
//     )
//   }

//   if (!patient) return null

//   return (
//     <div dir="rtl" className="bg-amber-50 min-h-screen p-6">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-2xl font-bold text-amber-900 mb-4">تفاصيل المريض</h1>

//         <div className="bg-white p-6 rounded-lg shadow-md border border-amber-100 space-y-4">
//           <DetailItem icon={<User size={20} />} label="الاسم الكامل" value={patient.name} />
//           <DetailItem icon={<Calendar size={20} />} label="العمر" value={patient.age} />
//           <DetailItem icon={<User size={20} />} label="الجنس" value={patient.gender} />
//           <DetailItem icon={<Phone size={20} />} label="رقم الهاتف" value={patient.phone} />
//           <DetailItem icon={<FileText size={20} />} label="الحالة الطبية" value={patient.condition || 'لا يوجد'} />

//           <div className="pt-6 text-center">
//             <button
//               onClick={() => router.back()}
//               className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow"
//             >
//               رجوع
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function DetailItem({ icon, label, value }) {
//   return (
//     <div>
//       <label className="block mb-1 font-medium text-amber-800 flex items-center gap-2">
//         {icon} {label}
//       </label>
//       <div className="bg-amber-100 rounded-md p-3 text-amber-900 shadow-inner">{value}</div>
//     </div>
//   )
// }
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { User, Phone, FileText, Calendar } from "lucide-react";

export default function ViewPatientPage() {
  const { id } = useParams();
  const router = useRouter();

  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await fetch(`/api/tests/${id}`);
        if (!res.ok) throw new Error("لم يتم العثور على بيانات المريض");
        const data = await res.json();
        setPatient(data);
      } catch (err) {
        alert("❌ خطأ في تحميل بيانات المريض");
        router.push("/admin-dashboard/patients");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPatient();
  }, [id, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-pink-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!patient) return null;

  return (
    <div dir="rtl" className="bg-pink-50 min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">تفاصيل المريض</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4">
          <DetailItem
            icon={<User size={20} />}
            label="الاسم الكامل"
            value={patient.name}
          />
          <DetailItem
            icon={<Calendar size={20} />}
            label="العمر"
            value={patient.age}
          />
          <DetailItem
            icon={<User size={20} />}
            label="الجنس"
            value={patient.gender}
          />
          <DetailItem
            icon={<Phone size={20} />}
            label="رقم الهاتف"
            value={patient.phone}
          />
          <DetailItem
            icon={<FileText size={20} />}
            label="الحالة الطبية"
            value={patient.condition || "لا يوجد"}
          />

          <div className="pt-6 text-center">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow"
            >
              رجوع
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-600 flex items-center gap-2">
        {icon} {label}
      </label>
      <div className="bg-pink-50 rounded-md p-3 text-gray-800 shadow-inner">
        {value}
      </div>
    </div>
  );
}
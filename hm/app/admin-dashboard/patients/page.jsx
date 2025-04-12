// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'

// export default function PatientsPage() {
//     const [patients, setPatients] = useState([])
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         const fetchPatients = async () => {
//             try {
//                 const res = await fetch('/api/patients/new')
//                 const data = await res.json()
//                 console.log('📦 بيانات المرضى:', data)
//                 setPatients(data)
//             } catch (error) {
//                 console.error('فشل تحميل المرضى:', error)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchPatients()
//     }, [])


//     return (
//         <div className="p-6 bg-amber-50 min-h-screen" dir="rtl">
//             <div className="max-w-6xl mx-auto">
//                 <div className="flex justify-between items-center mb-6">
//                     <h1 className="text-2xl font-bold text-amber-900">إدارة المرضى</h1>
//                     <Link href="/admin-dashboard/patients/new">
//                         <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center shadow-md transition duration-200">
//                             <span className="mr-1">+</span> إضافة مريض جديد
//                         </button>
//                     </Link>
//                 </div>

//                 {loading ? (
//                     <div className="flex justify-center items-center h-64">
//                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
//                     </div>
//                 ) : patients.length === 0 ? (
//                     <div className="bg-white rounded-lg shadow-md p-8 text-center">
//                         <p className="text-amber-800 text-lg">لا يوجد مرضى مسجلين حالياً</p>
//                     </div>
//                 ) : (
//                     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full divide-y divide-amber-200">
//                                 <thead className="bg-amber-100">
//                                     <tr>
//                                         <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-900 uppercase tracking-wider">#</th>
//                                         <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-900 uppercase tracking-wider">الاسم</th>
//                                         <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-900 uppercase tracking-wider">العمر</th>
//                                         <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-900 uppercase tracking-wider">الجنس</th>
//                                         <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-900 uppercase tracking-wider">الهاتف</th>
//                                         <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-900 uppercase tracking-wider">الحالة</th>
//                                         <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-900 uppercase tracking-wider">إجراءات</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="bg-white divide-y divide-amber-100">
//                                     {patients.map((patient, index) => (
//                                         <tr key={patient._id} className={index % 2 === 0 ? 'bg-amber-50' : 'bg-white'}>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-900">{index + 1}</td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-900">{patient.name}</td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">{patient.age}</td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">{patient.gender}</td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800 font-mono">{patient.phone}</td>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
//                                                     {patient.condition || 'لا يوجد'}
//                                                 </span>
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-900">
//                                                 <div className="flex space-x-2 space-x-reverse gap-5">
                                                    
//                                                     <Link href={`/admin-dashboard/patients/view/${patient._id}`}>
//                                                         <button className="text-blue-600 hover:text-blue-800">عرض</button>
//                                                     </Link>

//                                                     <Link href={`/admin-dashboard/patients/edit/${patient._id}`}>
//                                                         <button className="text-amber-600 hover:text-amber-800">
//                                                             تعديل
//                                                         </button>
//                                                     </Link>

//                                                     <button
//                                                         onClick={async () => {
//                                                             if (confirm('هل أنت متأكد أنك تريد حذف هذا المريض؟')) {
//                                                                 try {
//                                                                     const res = await fetch(`/api/patients/${patient._id}`, {
//                                                                         method: 'DELETE',
//                                                                     })

//                                                                     if (res.ok) {
//                                                                         setPatients(prev => prev.filter(p => p._id !== patient._id))
//                                                                     } else {
//                                                                         const err = await res.json()
//                                                                         alert(err.error || 'فشل في الحذف')
//                                                                     }
//                                                                 } catch (err) {
//                                                                     console.error('❌ فشل الحذف:', err)
//                                                                 }
//                                                             }
//                                                         }}
//                                                         className="text-red-600 hover:text-red-800"
//                                                     >
//                                                         حذف
//                                                     </button>

//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 )}

//                 <div className="mt-4 text-center text-sm text-amber-700">
//                     إجمالي عدد المرضى: {patients.length}
//                 </div>
//             </div>
//         </div>
//     )
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("/api/tests/new");
        const data = await res.json();
        console.log("📦 بيانات المرضى:", data);
        setPatients(data);
      } catch (error) {
        console.error("فشل تحميل المرضى:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  return (
    <div className="p-6 bg-pink-50 min-h-screen" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">إدارة المرضى</h1>
          <Link href="/admin-dashboard/patients/new">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg flex items-center shadow-md transition duration-200">
              <span className="mr-1">+</span> إضافة مريض جديد
            </button>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
          </div>
        ) : patients.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">لا يوجد مرضى مسجلين حالياً</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      الاسم
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      العمر
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      الجنس
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      الهاتف
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      الحالة
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      إجراءات
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patients.map((patient, index) => (
                    <tr
                      key={patient._id}
                      className={index % 2 === 0 ? "bg-pink-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {patient.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {patient.age}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {patient.gender}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                        {patient.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">
                          {patient.condition || "لا يوجد"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <div className="flex space-x-2 space-x-reverse gap-5">
                          <Link
                            href={`/admin-dashboard/patients/view/${patient._id}`}
                          >
                            <button className="text-pink-600 hover:text-pink-700">
                              عرض
                            </button>
                          </Link>
                          <Link
                            href={`/admin-dashboard/patients/edit/${patient._id}`}
                          >
                            <button className="text-pink-600 hover:text-pink-700">
                              تعديل
                            </button>
                          </Link>
                          <button
                            onClick={async () => {
                              if (
                                confirm("هل أنت متأكد أنك تريد حذف هذا المريض؟")
                              ) {
                                try {
                                  const res = await fetch(
                                    `/api/tests/${patient._id}`,
                                    {
                                      method: "DELETE",
                                    }
                                  );

                                  if (res.ok) {
                                    setPatients((prev) =>
                                      prev.filter((p) => p._id !== patient._id)
                                    );
                                  } else {
                                    const err = await res.json();
                                    alert(err.error || "فشل في الحذف");
                                  }
                                } catch (err) {
                                  console.error("❌ فشل الحذف:", err);
                                }
                              }
                            }}
                            className="text-red-600 hover:text-red-800"
                          >
                            حذف
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-4 text-center text-sm text-gray-600">
          إجمالي عدد المرضى: {patients.length}
        </div>
      </div>
    </div>
  );
}
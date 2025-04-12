"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("/api/records");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error("❌ فشل في تحميل المواعيد:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="p-6 bg-pink-50 min-h-screen" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">إدارة المواعيد</h1>
          <Link href="/admin-dashboard/appointments/new">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200 flex items-center">
              <span className="mr-1">+</span> إضافة موعد جديد
            </button>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
          </div>
        ) : appointments.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">لا توجد مواعيد حالياً</p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-gray-800 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-right">المريض</th>
                  <th className="px-6 py-3 text-right">الطبيب</th>
                  <th className="px-6 py-3 text-right">التاريخ</th>
                  <th className="px-6 py-3 text-right">الوقت</th>
                  <th className="px-6 py-3 text-right">الحالة</th>
                  <th className="px-6 py-3 text-right">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {appointment?.patient?.name || "غير محدد"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {appointment?.doctor?.name || "غير محدد"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {new Date(appointment.date).toLocaleDateString("ar-SA")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {appointment.time}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <span className="px-2 py-1 text-xs bg-pink-100 rounded-full text-pink-800">
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <div className="flex space-x-2 space-x-reverse gap-5">
                        <Link
                          href={`/admin-dashboard/appointments/view/${appointment._id}`}
                        >
                          <button className="text-blue-600 hover:text-blue-800">
                            عرض
                          </button>
                        </Link>
                        <Link
                          href={`/admin-dashboard/appointments/edit/${appointment._id}`}
                        >
                          <button className="text-pink-600 hover:text-pink-700">
                            تعديل
                          </button>
                        </Link>
                        <button
                          onClick={async () => {
                            if (confirm("هل تريد حذف هذا الموعد؟")) {
                              try {
                                const res = await fetch(
                                  `/api/records/${appointment._id}`,
                                  {
                                    method: "DELETE",
                                  }
                                );
                                if (res.ok) {
                                  setAppointments((prev) =>
                                    prev.filter(
                                      (a) => a._id !== appointment._id
                                    )
                                  );
                                } else {
                                  alert("❌ فشل في حذف الموعد");
                                }
                              } catch (error) {
                                console.error("❌ فشل الحذف:", error);
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
        )}

        {!loading && appointments.length > 0 && (
          <div className="mt-4 text-center text-sm text-gray-600">
            إجمالي عدد المواعيد: {appointments.length}
          </div>
        )}
      </div>
    </div>
  );
}
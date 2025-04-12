"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ViewAppointmentPage() {
  const { id } = useParams();
  const router = useRouter();

  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await fetch(`/api/records/${id}`);
        const data = await res.json();
        setAppointment(data);
      } catch (error) {
        alert("❌ فشل تحميل تفاصيل الموعد");
        router.push("/admin-dashboard/appointments");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchAppointment();
  }, [id, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-pink-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!appointment) return null;

  return (
    <div dir="rtl" className="p-6 bg-pink-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">تفاصيل الموعد</h1>
        <div className="space-y-4 text-sm text-gray-600">
          <p>
            <strong className="text-gray-800">اسم المريض: </strong>
            {appointment?.patient?.name || "غير محدد"}
          </p>
          <p>
            <strong className="text-gray-800">اسم الطبيب: </strong>
            {appointment?.doctor?.name || "غير محدد"}
          </p>
          <p>
            <strong className="text-gray-800">التاريخ: </strong>
            {new Date(appointment.date).toLocaleDateString("ar-SA")}
          </p>
          <p>
            <strong className="text-gray-800">الوقت: </strong>
            {appointment.time}
          </p>
          <p>
            <strong className="text-gray-800">الحالة: </strong>
            {appointment.status || "غير محددة"}
          </p>
          <p>
            <strong className="text-gray-800">السبب: </strong>
            {appointment.reason || "لا يوجد"}
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => router.back()}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-200 shadow-md"
          >
            رجوع
          </button>
        </div>
      </div>
    </div>
  );
}
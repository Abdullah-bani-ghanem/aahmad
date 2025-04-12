"use client";

import { useState, useEffect } from "react";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await fetch("/api/appointments/my", {
        credentials: "include", // إرسال الكوكيز مع الطلب
      });
      const data = await res.json();
      if (res.ok) {
        setAppointments(data.appointments);
      }
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🗓️ مواعيدي</h1>

      {loading ? (
        <p className="text-center text-gray-500">جاري التحميل...</p>
      ) : appointments.length === 0 ? (
        <p className="text-center text-gray-500">لا يوجد مواعيد حتى الآن.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appt) => (
            <li
              key={appt._id}
              className="bg-white border p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">
                  📅 {appt.date} ⏰ {appt.time}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  الطبيب: {appt.doctorId?.name || "—"}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ملاحظات: {appt.notes || "—"}
                </p>
              </div>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  appt.status === "confirmed"
                    ? "bg-green-100 text-green-700"
                    : appt.status === "cancelled"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {appt.status === "pending"
                  ? "قيد المراجعة"
                  : appt.status === "confirmed"
                  ? "مؤكد"
                  : "ملغى"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

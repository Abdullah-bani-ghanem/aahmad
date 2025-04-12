"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function DoctorDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`/api/doctors/${id}`);
        if (!res.ok) throw new Error("فشل في تحميل بيانات الطبيب");
        const data = await res.json();
        setDoctor(data);
      } catch (error) {
        alert("❌ لم يتم العثور على بيانات الطبيب");
        router.push("/admin-dashboard/doctors");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDoctor();
  }, [id, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-pink-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!doctor) return null;

  return (
    <div dir="rtl" className="bg-pink-50 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">تفاصيل الطبيب</h1>

        <div className="space-y-4 text-gray-600">
          <div>
            <strong className="font-medium text-gray-800">
              الاسم الكامل:{" "}
            </strong>{" "}
            {doctor.name}
          </div>
          <div>
            <strong className="font-medium text-gray-800">التخصص: </strong>{" "}
            {doctor.specialty}
          </div>
          <div>
            <strong className="font-medium text-gray-800">
              البريد الإلكتروني:{" "}
            </strong>{" "}
            {doctor.email}
          </div>
          <div>
            <strong className="font-medium text-gray-800">رقم الهاتف: </strong>{" "}
            {doctor.phone}
          </div>
          <div>
            <strong className="font-medium text-gray-800">الوصف: </strong>{" "}
            {doctor.description || "لا يوجد"}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-200 shadow-md"
          >
            رجوع
          </button>
        </div>
      </div>
    </div>
  );
}
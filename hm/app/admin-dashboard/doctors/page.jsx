"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const doctorsPerPage = 5;

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/doctors?q=${encodeURIComponent(
            searchQuery
          )}&page=${currentPage}&limit=${doctorsPerPage}`
        );
        const data = await res.json();
        if (res.ok) {
          setDoctors(data.doctors || []);
          setTotalPages(data.totalPages || 1);
          setTotalDoctors(data.totalDoctors || 0);
        } else {
          console.error("فشل تحميل الأطباء:", data.error);
        }
      } catch (error) {
        console.error("فشل تحميل الأطباء:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [searchQuery, currentPage]);

  const handleDelete = async (id) => {
    if (!confirm("هل تريد حذف هذا الطبيب؟")) return;
    try {
      const res = await fetch(`/api/doctors/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setDoctors((prev) => prev.filter((doc) => doc._id !== id));
        setTotalDoctors((prev) => prev - 1);
        if (doctors.length === 1 && currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      } else {
        const err = await res.json();
        alert(err.error || "فشل في الحذف");
      }
    } catch (err) {
      console.error("❌ فشل في الحذف:", err);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-6 bg-pink-50 min-h-screen" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">إدارة الأطباء</h1>
          <Link href="/admin-dashboard/doctors/new">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200 flex items-center">
              <span className="mr-1">+</span> إضافة طبيب
            </button>
          </Link>
        </div>

        {/* شريط البحث */}
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // إعادة تعيين الصفحة إلى 1 عند البحث
            }}
            placeholder="ابحث عن طبيب بالاسم أو التخصص"
            className="w-full p-2 bg-pink-50 border border-gray-200 rounded-lg focus:ring-pink-500 focus:border-pink-500 text-gray-800 placeholder-gray-500"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
          </div>
        ) : doctors.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">
              {searchQuery ? "لا توجد نتائج مطابقة" : "لا يوجد أطباء حالياً"}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider">
                      الاسم
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider">
                      التخصص
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider">
                      الهاتف
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider">
                      الإجراءات
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {doctors.map((doctor, index) => (
                    <tr
                      key={doctor._id}
                      className={index % 2 === 0 ? "bg-pink-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {(currentPage - 1) * doctorsPerPage + index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {doctor.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {doctor.specialty}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">
                        {doctor.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-2 space-x-reverse gap-5">
                        <Link
                          href={`/admin-dashboard/doctors/view/${doctor._id}`}
                        >
                          <button className="text-pink-600 hover:text-pink-700">
                            عرض
                          </button>
                        </Link>
                        <Link
                          href={`/admin-dashboard/doctors/edit/${doctor._id}`}
                        >
                          <button className="text-pink-600 hover:text-pink-700">
                            تعديل
                          </button>
                        </Link>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDelete(doctor._id)}
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ترقيم الصفحات */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-4 space-x-2 space-x-reverse">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-lg ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-pink-600 text-white hover:bg-pink-700"
                  }`}
                >
                  السابق
                </button>
                <span className="text-gray-600">
                  الصفحة {currentPage} من {totalPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-lg ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-pink-600 text-white hover:bg-pink-700"
                  }`}
                >
                  التالي
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 text-center text-sm text-gray-600">
          إجمالي عدد الأطباء: {totalDoctors}
        </div>
      </div>
    </div>
  );
}
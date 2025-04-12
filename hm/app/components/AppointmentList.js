"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function AppointmentList({ appointments: initialAppointments, changeStatus }) {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalAppointments: 0,
    appointmentsPerPage: 6,
  });
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    date: "",
  });

  // تحديث المواعيد عند تغيير initialAppointments من ProviderDashboard
  useEffect(() => {
    setAppointments(initialAppointments);
  }, [initialAppointments]);

  // جلب المواعيد من الـ Backend عند تغيير الفلاتر أو الصفحة
  useEffect(() => {
    fetchAppointments();
  }, [filters, pagination.currentPage]);

  async function fetchAppointments() {
    try {
      const url = new URL("http://localhost:3000/api/appointments");
      url.searchParams.set("search", filters.search);
      url.searchParams.set("status", filters.status);
      url.searchParams.set("date", filters.date);
      url.searchParams.set("page", pagination.currentPage);
      url.searchParams.set("limit", pagination.appointmentsPerPage);

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch appointments");
      const data = await response.json();
      setAppointments(data.appointments);
      setPagination({
        currentPage: data.pagination.currentPage,
        totalPages: data.pagination.totalPages,
        totalAppointments: data.pagination.totalAppointments,
        appointmentsPerPage: data.pagination.appointmentsPerPage,
      });
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  };

  const handleChangeStatus = async (id, newStatus) => {
    try {
      await changeStatus(id, newStatus);
      // عرض تنبيه نجاح باستخدام SweetAlert2
      Swal.fire({
        icon: "success",
        title: "تم التحديث!",
        text: `تم تغيير حالة الموعد إلى "${newStatus === "completed" ? "مكتمل" : "ملغى"}" بنجاح.`,
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      // عرض تنبيه خطأ
      Swal.fire({
        icon: "error",
        title: "فشل التحديث",
        text: "حدث خطأ أثناء تغيير حالة الموعد، حاول مرة أخرى.",
      });
      console.error("Error updating status:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-right text-black">الحجوزات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-right">بحث</label>
            <input
              type="text"
              name="search"
              placeholder="ابحث بالاسم أو السبب"
              value={filters.search}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 text-black rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-right">الحالة</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full p-2 border text-black border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
            >
              <option value="all">جميع الحالات</option>
              <option value="pending">قيد الانتظار</option>
              <option value="completed">مكتمل</option>
              <option value="cancelled">ملغى</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-right">التاريخ</label>
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="bg-white p-4 rounded-lg shadow-md text-black" dir="rtl">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-right">المواعيد</h2>
          <span className="text-gray-500">
            عرض{" "}
            {pagination.totalAppointments > 0
              ? (pagination.currentPage - 1) * pagination.appointmentsPerPage + 1
              : 0}
            -{Math.min(pagination.currentPage * pagination.appointmentsPerPage, pagination.totalAppointments)} من{" "}
            {pagination.totalAppointments}
          </span>
        </div>

        {appointments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((appt) => (
              <div
                key={appt._id}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-right">
                    {appt.patient?.name || "مريض غير معروف"}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appt.status)}`}
                  >
                    {appt.status === "pending"
                      ? "قيد الانتظار"
                      : appt.status === "completed"
                      ? "مكتمل"
                      : appt.status === "cancelled"
                      ? "ملغى"
                      : appt.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-right">
                  <div className="flex items-center justify-end">
                    <span>التاريخ: {new Date(appt.date).toLocaleDateString("ar-EG")}</span>
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>

                  <div className="flex items-center justify-end">
                    <span>الوقت: {appt.time}</span>
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>

                  <div className="flex items-center justify-end">
                    <span>المشكلة الصحية: {appt.reason || "غير محدد"}</span>
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleChangeStatus(appt._id, "completed")}
                    className={`flex-1 py-2 px-3 rounded text-sm font-medium text-white ${
                      appt.status === "completed"
                        ? "bg-green-300 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    }`}
                    disabled={appt.status === "completed"}
                  >
                    إكمال
                  </button>
                  <button
                    onClick={() => handleChangeStatus(appt._id, "cancelled")}
                    className={`flex-1 py-2 px-3 rounded text-sm font-medium text-white ${
                      appt.status === "cancelled"
                        ? "bg-red-300 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    }`}
                    disabled={appt.status === "cancelled"}
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">لا توجد مواعيد</h3>
            <p className="mt-1 text-sm text-gray-500">حاول تعديل معايير البحث أو الفلترة</p>
          </div>
        )}

        {/* Pagination Controls */}
        {pagination.totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <nav className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() =>
                  setPagination((prev) => ({
                    ...prev,
                    currentPage: Math.max(prev.currentPage - 1, 1),
                  }))
                }
                disabled={pagination.currentPage === 1}
                className={`relative inline-flex items-center px-4 py-2 rounded-l-md border ${
                  pagination.currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              >
                التالي
              </button>

              {[...Array(pagination.totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setPagination((prev) => ({ ...prev, currentPage: idx + 1 }))
                  }
                  className={`relative inline-flex items-center px-4 py-2 border ${
                    pagination.currentPage === idx + 1
                      ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  } text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setPagination((prev) => ({
                    ...prev,
                    currentPage: Math.min(prev.currentPage + 1, pagination.totalPages),
                  }))
                }
                disabled={pagination.currentPage === pagination.totalPages}
                className={`relative inline-flex items-center px-4 py-2 rounded-r-md border ${
                  pagination.currentPage === pagination.totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              >
                السابق
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
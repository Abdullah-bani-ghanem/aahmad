"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [data, setData] = useState({
    totalUsers: 0,
    totalPatients: 0,
    totalDoctors: 0,
    totalAppointments: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // جلب البيانات من الـ APIs
        const [patientsRes, providersRes, appointmentsRes] = await Promise.all([
          fetch("/api/tests/new"),  // API للمرضى
          fetch("/api/doctors"),  // API للأطباء
          fetch("/api/records"),  // API للمواعيد
        ]);
  
        // تحويل البيانات إلى JSON
        const [patientsData, providersData, appointmentsData] = await Promise.all([
          patientsRes.json(),
          providersRes.json(),
          appointmentsRes.json(),
        ]);
  
        // التحقق من حالة الاستجابة
        if (!patientsRes.ok) throw new Error(patientsData.error || "فشل في جلب المرضى");
        if (!providersRes.ok) throw new Error(providersData.error || "فشل في جلب الأطباء");
        if (!appointmentsRes.ok) throw new Error(appointmentsData.error || "فشل في جلب المواعيد");
  
        // تحديث البيانات
        setData({
          totalUsers: 120,  // يمكنك تحديث عدد المستخدمين هنا إذا كنت بحاجة إليه
          totalPatients: patientsData.length || 0,  // التأكد من أن المرضى موجودين في الـ API
          totalDoctors: providersData.doctors.length || 0,  // التأكد من أن الأطباء موجودين في الـ API
          totalAppointments: appointmentsData.length || 0,  // التأكد من أن المواعيد موجودة في الـ API
          totalRevenue: 25000,  // يمكنك تعديل الإيرادات بناءً على احتياجاتك
        });
  
        setLoading(false);
      } catch (error) {
        console.error("❌ فشل في جلب البيانات:", error.message);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="min-h-screen bg-pink-50" dir="rtl">
      <div className="p-6 max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gray-800 text-3xl font-bold">
            لوحة تحكم الإدارة
          </h1>
          <p className="text-gray-600 mt-2">مرحباً بك في نظام إدارة العيادة</p>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {/* <DashboardCard
                title="إجمالي المستخدمين"
                value={data.totalUsers}
                icon="👥"
                color="bg-gradient-to-br from-pink-600 to-pink-700"
              /> */}
              <DashboardCard
                title="عدد المرضى"
                value={data.totalPatients}
                icon="🏥"
                color="bg-gradient-to-br from-pink-600 to-pink-700"
              />
              <DashboardCard
                title="مقدمي الرعاية"
                value={data.totalDoctors}
                icon="👨‍⚕️"
                color="bg-gradient-to-br from-pink-600 to-pink-700"
              />
              <DashboardCard
                title="المواعيد"
                value={data.totalAppointments}
                icon="📅"
                color="bg-gradient-to-br from-pink-600 to-pink-700"
              />
              {/* <DashboardCard
                title="الإيرادات ($)"
                value={`$${data.totalRevenue.toLocaleString()}`}
                icon="💰"
                color="bg-gradient-to-br from-pink-600 to-pink-700"
              /> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 col-span-2">
                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">📊</span> الإحصائيات الأخيرة
                </h2>
                <div className="h-64 flex items-center justify-center text-gray-600">
                  هنا يمكن عرض رسم بياني للإحصائيات
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">🔔</span> آخر التنبيهات
                </h2>
                <ul className="space-y-3">
                  <AlertItem text="موعد جديد تم تحديده" time="منذ 5 دقائق" />
                  <AlertItem text="تم تسجيل مريض جديد" time="منذ 2 ساعة" />
                  <AlertItem
                    text="تقرير جديد جاهز للمراجعة"
                    time="منذ 6 ساعات"
                  />
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <QuickLinkCard
                title="إدارة المرضى"
                icon="🏥"
                description="عرض وإدارة سجلات المرضى"
                linkText="عرض المرضى"
                href="/admin-dashboard/patients"
              />
              <QuickLinkCard
                title="المواعيد"
                icon="📅"
                description="جدولة وإدارة المواعيد"
                linkText="فتح التقويم"
                href="/admin-dashboard/appointments"
              />
              <QuickLinkCard
                title="التقارير"
                icon="📊"
                description="الوصول إلى تقارير النظام"
                linkText="عرض التقارير"
                href="/admin-dashboard/reports"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="rounded-xl shadow-md overflow-hidden">
      <div className={`${color} p-6 text-white`}>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-sm opacity-90 mb-1">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <div className="text-3xl opacity-80">{icon}</div>
        </div>
      </div>
    </div>
  );
}

function AlertItem({ text, time }) {
  return (
    <li className="flex items-center justify-between border-b border-gray-200 pb-2">
      <span className="text-gray-800">{text}</span>
      <span className="text-xs text-gray-600">{time}</span>
    </li>
  );
}

function QuickLinkCard({ title, icon, description, linkText, href }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link href={href} className="mt-auto">
        <button className="w-full py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition duration-200 text-sm">
          {linkText}
        </button>
      </Link>
    </div>
  );
}
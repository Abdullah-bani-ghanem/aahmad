"use client";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import AppointmentList from "../components/AppointmentList";
import PatientList from "../components/PatientList";
import PrescriptionList from "../components/PrescriptionList";

export default function ProviderDashboard() {
  const [data, setData] = useState({
    patients: [],
    appointments: [],
    prescriptions: [],
  });
  const [user, setUser] = useState({
    userId: "sample-user-id",
    name: "أحمد",
    role: "doctor",
  });
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [patients, appointmentsResponse, prescriptions] = await Promise.all([
        fetch(`http://localhost:3000/api/patients?doctorId=${user.userId}`).then((res) => res.json()),
        fetch(`http://localhost:3000/api/appointments`).then((res) => res.json()),
        fetch(`http://localhost:3000/api/prescriptions`).then((res) => res.json()),
      ]);

      // استخراج appointments من الكائن المرجع أو استخدام المصفوفة مباشرة إذا لم يكن كائنًا
      const appointments = appointmentsResponse.appointments || appointmentsResponse || [];

      setData({ patients, appointments, prescriptions });
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error);
      setData({ patients: [], appointments: [], prescriptions: [] }); // قيم افتراضية في حالة الخطأ
    }
  }

  async function changeAppointmentStatus(id, newStatus) {
    try {
      const response = await fetch(`/api/appointments`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (!response.ok) throw new Error("فشل في تحديث الحالة");
      const updatedAppointment = await response.json();
      setData((prev) => ({
        ...prev,
        appointments: prev.appointments.map((appt) =>
          appt._id === id ? updatedAppointment : appt
        ),
      }));
      return updatedAppointment;
    } catch (error) {
      console.error("خطأ في تغيير الحالة:", error);
      throw error; // للسماح لـ AppointmentList بالتعامل مع الخطأ
    }
  }

  const handleLogout = () => {
    console.log("جاري تسجيل الخروج...");
    window.location.href = "/login";
  };

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <Overview data={data} />;
      case "appointments":
        return <AppointmentList appointments={data.appointments} changeStatus={changeAppointmentStatus} />;
      case "patients":
        return <PatientList patients={data.patients} doctorId={user.userId} />;
      case "prescriptions":
        return user.role === "doctor" ? (
          <PrescriptionList prescriptions={data.prescriptions} />
        ) : (
          <div>غير متاح لك</div>
        );
      default:
        return <div>الرجاء اختيار قسم من الشريط الجانبي</div>;
    }
  };

  return (
    <div className="flex" dir="rtl">
      <Sidebar role={user.role} setActiveSection={setActiveSection} handleLogout={handleLogout} />
      <div className="flex-1 p-4">{renderSection()}</div>
    </div>
  );
}
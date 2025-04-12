"use client";

export default function Overview({ data }) {
  const patientCount = data.patients.length || 0;
  const appointmentCount = Array.isArray(data.appointments) ? data.appointments.length : 0;
  const pendingAppointments = Array.isArray(data.appointments)
    ? data.appointments.filter((appt) => appt.status === "pending").length
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">عدد المرضى</h3>
        <p className="text-2xl">{patientCount}</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">إجمالي المواعيد</h3>
        <p className="text-2xl">{appointmentCount}</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">المواعيد المعلقة</h3>
        <p className="text-2xl">{pendingAppointments}</p>
      </div>
    </div>
  );
}
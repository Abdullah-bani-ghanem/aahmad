"use client";
const { useState } = require("react");
const AppointmentActions = require("./AppointmentActions");

export default function AppointmentCalendar({ appointments, user }) {
  const [view, setView] = useState("daily");

  const filteredAppointments = view === "daily"
    ? appointments.filter((appt) => new Date(appt.date).toDateString() === new Date().toDateString())
    : appointments;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Appointments</h2>
      <div className="mb-4">
        <button
          onClick={() => setView("daily")}
          className="mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Daily
        </button>
        <button
          onClick={() => setView("weekly")}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Weekly
        </button>
      </div>
      <ul className="space-y-2">
        {filteredAppointments.map((appt) => (
          <li key={appt.id} className="text-gray-700">
            {appt.patientName} - {new Date(appt.date).toLocaleString()} ({appt.status})
            {user.role === "doctor" && <AppointmentActions appointment={appt} />}
          </li>
        ))}
      </ul>
    </div>
  );
}


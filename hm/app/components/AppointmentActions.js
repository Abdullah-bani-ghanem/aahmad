"use client";
const { useState } = require("react");

export default function AppointmentActions({ appointment }) {
  const [status, setStatus] = useState(appointment.status);

  const handleUpdate = async (newStatus) => {
    const res = await fetch(`/api/appointments`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: appointment.id, status: newStatus }),
    });
    if (res.ok) setStatus(newStatus);
  };

  return (
    <div className="inline-block ml-4">
      <button
        onClick={() => handleUpdate("approved")}
        className="p-1 bg-green-500 text-white rounded mr-2"
      >
        Approve
      </button>
      <button
        onClick={() => handleUpdate("cancelled")}
        className="p-1 bg-red-500 text-white rounded"
      >
        Cancel
      </button>
    </div>
  );
}


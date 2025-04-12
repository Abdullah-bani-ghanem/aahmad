"use client";

import { useState } from "react";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    doctorId: "",
    notes: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ تم الحجز بنجاح");
      setFormData({ date: "", time: "", doctorId: "", notes: "" });
    } else {
      setMessage("❌ حدث خطأ أثناء الحجز");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">📅 حجز موعد</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="doctorId"
          value={formData.doctorId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="معرّف الطبيب (مؤقتًا)"
        />
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="ملاحظات (اختياري)"
        ></textarea>

        <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">
          حجز الموعد
        </button>
      </form>

      {message && <p className="text-center text-pink-600 mt-4">{message}</p>}
    </div>
  );
}

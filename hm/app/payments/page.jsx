"use client";

import { useState, useEffect } from "react";

export default function PaymentsPage() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("cash");
  const [notes, setNotes] = useState("");
  const [payments, setPayments] = useState([]);
  const [message, setMessage] = useState("");

  const fetchPayments = async () => {
    const res = await fetch("/api/payments");
    const data = await res.json();
    setPayments(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, method, notes }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ تم الدفع بنجاح!");
      setAmount("");
      setNotes("");
      fetchPayments();
    } else {
      setMessage("❌ حدث خطأ أثناء الدفع");
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto text-right">
      <h1 className="text-2xl font-bold mb-6">💳 صفحة الدفع</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">المبلغ (USD)</label>
          <input
            type="number"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">طريقة الدفع</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="cash">نقدًا</option>
            <option value="card">بطاقة</option>
            <option value="bank">تحويل بنكي</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">ملاحظات</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded"
        >
          💰 دفع
        </button>

        {message && <p className="mt-4 text-pink-600 font-semibold">{message}</p>}
      </form>

      <h2 className="text-xl font-semibold mb-2">📜 سجل المدفوعات</h2>
      <ul className="space-y-3">
        {payments.map((pay) => (
          <li key={pay._id} className="bg-white p-3 border rounded shadow-sm">
            💵 {pay.amount} USD - 🧾 {pay.method} - 🕒{" "}
            {new Date(pay.date).toLocaleDateString()} - 👤{" "}
            {pay.userId?.name || "مستخدم غير معروف"}
          </li>
        ))}
      </ul>
    </div>
  );
}

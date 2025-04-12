"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Save, User, Phone, FileText } from "lucide-react";

export default function EditPatientPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    condition: "",
  });

  const [loading, setLoading] = useState(false);

  // جلب بيانات المريض
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await fetch(`/api/tests/${id}`);
        if (!res.ok) throw new Error("فشل في تحميل بيانات المريض");
        const data = await res.json();
        setForm(data);
      } catch (error) {
        alert("❌ لم يتم العثور على بيانات المريض");
        router.push("/admin-dashboard/patients");
      }
    };

    if (id) fetchPatient();
  }, [id, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/tests/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("✅ تم تعديل المريض بنجاح");
        router.push("/admin-dashboard/patients");
      } else {
        const error = await res.json();
        alert("❌ فشل في التعديل: " + (error?.error || "حدث خطأ غير متوقع"));
      }
    } catch (error) {
      alert("❌ فشل الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="bg-pink-50 min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          تعديل بيانات المريض
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-6 rounded-lg shadow-md border border-gray-200"
        >
          {/* الاسم */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              الاسم الكامل
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none ">
                <User size={18} className="text-pink-600" />
              </div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full pr-10 border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
                required
              />
            </div>
          </div>

          {/* العمر والجنس */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-gray-600 ">
                العمر
              </label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                className="w-full border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-600">
                الجنس
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
                required
              >
                <option value="">اختر الجنس</option>
                <option value="ذكر">ذكر</option>
                <option value="أنثى">أنثى</option>
              </select>
            </div>
          </div>

          {/* الهاتف */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              رقم الهاتف
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Phone size={18} className="text-pink-600" />
              </div>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full pr-10 border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
                required
              />
            </div>
          </div>

          {/* الحالة */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              الحالة الطبية
            </label>
            <div className="relative">
              <div className="absolute top-2 right-3 pointer-events-none ">
                <FileText size={18} className="text-pink-600" />
              </div>
              <textarea
                name="condition"
                value={form.condition}
                onChange={handleChange}
                className="w-full pr-10 border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
                rows={4}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
              disabled={loading}
            >
              إلغاء
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-600 text-black px-6 py-2 rounded-lg hover:bg-pink-700 shadow-md flex items-center"
            >
              <Save size={18} className="ml-2" />
              {loading ? "...جاري التعديل" : "تعديل المريض"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

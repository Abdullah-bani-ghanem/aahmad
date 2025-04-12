"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Save, Phone, Mail, User, UserCog } from "lucide-react";

export default function EditDoctorPage() {
  const router = useRouter();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    specialty: "",
    phone: "",
    email: "",
    availability: "متاح",
  });

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`/api/doctors/${id}`);
        if (!res.ok) throw new Error("فشل في تحميل بيانات الطبيب");
        const data = await res.json();
        setForm(data);
      } catch (error) {
        alert("❌ لم يتم العثور على بيانات الطبيب");
        router.push("/admin-dashboard/doctors");
      }
    };

    if (id) fetchDoctor();
  }, [id, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/doctors/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("✅ تم تعديل بيانات الطبيب بنجاح");
        router.push("/admin-dashboard/doctors");
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
          تعديل بيانات الطبيب
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-6 rounded-lg shadow-md border border-gray-200"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              الاسم الكامل
            </label>
            <div className="relative">
              <User
                className="absolute right-3 top-2.5 text-pink-600"
                size={18}
              />
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

          <div>
            <label className="block mb-1 font-medium text-gray-600">
              التخصص
            </label>
            <input
              type="text"
              name="specialty"
              value={form.specialty}
              onChange={handleChange}
              className="w-full border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-gray-600">
                رقم الهاتف
              </label>
              <div className="relative">
                <Phone
                  className="absolute right-3 top-2.5 text-pink-600"
                  size={18}
                />
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

            <div>
              <label className="block mb-1 font-medium text-gray-600">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail
                  className="absolute right-3 top-2.5 text-pink-600"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pr-10 border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
                />
              </div>
            </div>
          </div>

          <div>
            {/* <label className="block mb-1 font-medium text-gray-600">
              الحالة
            </label> */}
            {/* <select
              name="availability"
              value={form.availability}
              onChange={handleChange}
              className="w-full border-gray-200 p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 bg-pink-50  text-black"
            >
              <option value="متاح">متاح</option>
              <option value="غير متاح">غير متاح</option>
            </select> */}
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              disabled={loading}
            >
              إلغاء
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 shadow-md flex items-center transition-colors"
            >
              <Save size={18} className="ml-2" />
              {loading ? "...جاري التعديل" : "تعديل الطبيب"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
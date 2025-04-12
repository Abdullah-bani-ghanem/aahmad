"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    profileImage: ""
  });
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("/api/profile", { credentials: "include" });
      const data = await res.json();
      setUser(data.user);
      setFormData({
        name: data.user.name || "",
        phone: data.user.phone || "",
        address: data.user.address || "",
        profileImage: data.user.profileImage || ""
      });
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage" && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      setEditing(false);
      setMessage("✅ تم تحديث البيانات");
    } else {
      setMessage("❌ فشل التحديث");
    }
  };

  if (!user) return <p className="p-6 text-center">جاري التحميل...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">الملف الشخصي</h1>

      {editing ? (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <div className="flex flex-col items-center">
            <img
              src={formData.profileImage || "/default-avatar.png"}
              alt="الصورة"
              className="w-24 h-24 rounded-full mb-2"
            />
            <input type="file" name="profileImage" accept="image/*" onChange={handleChange} />
          </div>

          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="رقم الهاتف"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="العنوان"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <button className="bg-pink-600 text-white px-4 py-2 rounded" type="submit">
            حفظ التعديلات
          </button>
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="ml-2 text-gray-500 underline"
          >
            إلغاء
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded shadow space-y-4">
          <div className="flex flex-col items-center">
            <img
              src={user.profileImage || "/default-avatar.png"}
              alt="الصورة"
              className="w-24 h-24 rounded-full mb-2"
            />
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <p>📞 {user.phone || "—"}</p>
          <p>📍 {user.address || "—"}</p>
          <button
            className="bg-pink-600 text-white px-4 py-2 rounded"
            onClick={() => setEditing(true)}
          >
            تعديل البيانات
          </button>
        </div>
      )}

      {message && <p className="text-center text-pink-600 mt-4">{message}</p>}
    </div>
  );
}

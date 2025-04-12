// // models/User.js
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: {
//     type: String,
//     enum: ["admin", "doctor", "nurse", "patient"],
//     required: true,
//   },
//   phone: { type: String },
//   address: { type: String },
//   profileImage: { type: String, default: null }, // حقل الصورة الشخصية
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.models.User || mongoose.model("User", userSchema);




const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "doctor", "nurse", "patient"],
      required: true,
    },
    phone: { type: String },
    address: { type: String },
    profileImage: { type: String, default: null },
  },
  {
    timestamps: true, // ✅ بضيف createdAt و updatedAt تلقائيًا
  }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);

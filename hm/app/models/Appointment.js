// const mongoose = require("mongoose");

// const appointmentSchema = new mongoose.Schema({
//   patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
//   doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
//   date: { type: Date, required: true },
//   status: {
//     type: String,
//     enum: ["pending", "approved", "cancelled", "completed"],
//     default: "pending",
//   },
//   notes: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);


// const mongoose = require("mongoose");

// const appointmentSchema = new mongoose.Schema(
//   {
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     date: { type: String, required: true },
//     time: { type: String, required: true },
//     notes: { type: String },
//     status: {
//       type: String,
//       enum: ["pending", "confirmed", "cancelled"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);




// const mongoose = require("mongoose");

import mongoose from "mongoose"; // ضروري!



const appointmentSchema = new mongoose.Schema(
  {
    // المريض (مستخدم مسجل)
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // الطبيب (يمكن يكون اختياري)
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // تاريخ الحجز (بصيغة YYYY-MM-DD)
    date: {
      type: String,
      required: true,
    },

    // الوقت (بصيغة HH:mm)
    time: {
      type: String,
      required: true,
    },

    // ملاحظات إضافية
    notes: {
      type: String,
      default: "",
    },

    // حالة الموعد
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true, // لإضافة createdAt و updatedAt تلقائيًا
  }
);

module.exports =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);

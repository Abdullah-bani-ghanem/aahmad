import { connectDB } from "@/app/lib/db";
import Appointment from "@/app/models/Appointment";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { date, time, doctorId, notes } = await req.json();

    await connectDB();

    const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

    const appointment = new Appointment({
      userId: decoded.userId,
      doctorId: isValidObjectId(doctorId) ? doctorId : null,
      date,
      time,
      notes,
    });

    await appointment.save();

    return new Response(JSON.stringify({ message: "تم الحجز بنجاح", appointment }), { status: 201 });
  } catch (error) {
    console.error("❌ Error during appointment creation:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

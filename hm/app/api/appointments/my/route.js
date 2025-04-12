import { connectDB } from "@/app/lib/db";
import Appointment from "@/app/models/Appointment";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await connectDB();

    const appointments = await Appointment.find({ userId: decoded.userId })
      .populate("doctorId", "name")
      .sort({ date: 1, time: 1 });

    return new Response(JSON.stringify({ appointments }), { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching appointments:", error.message);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}

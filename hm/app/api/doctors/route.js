import { connectDB } from '../../lib/db'
import Doc from '../../models/Doc'
import User from "@/app/models/User"; // التأكد إنك جايب نموذج الأطباء


export async function GET() {
  try {
    await connectDB();

    // جلب الأطباء من نموذج Doc
    const doctorsFromDoc = await Doc.find().sort({ createdAt: -1 });

    // جلب الأطباء من نموذج User بناءً على الدور
    const doctorsFromUser = await User.find({ role: "doctor" }).select("name _id");

    // دمج الأطباء من الاثنين في قائمة واحدة
    const allDoctors = [...doctorsFromDoc, ...doctorsFromUser];

    return new Response(JSON.stringify({ doctors: allDoctors }), { status: 200 });
  } catch (err) {
    console.error("Error fetching doctors:", err.message);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const doctor = await Doc.create(body);
    return new Response(JSON.stringify({ success: true, doctor }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
// app/api/payments/route.js
import { connectDB } from "@/app/lib/db";
import Billing from "@/app/models/Billing";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  const tokenCookie = req.cookies.get("token");
  if (!tokenCookie) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  let decoded;
  try {
    decoded = jwt.verify(tokenCookie.value, JWT_SECRET);
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid token" }), { status: 401 });
  }

  const { amount, method, notes } = await req.json();

  await connectDB();

  const payment = new Billing({
    userId: decoded.userId,
    amount,
    method,
    notes,
    status: "paid",
    date: new Date(),
  });

  await payment.save();

  return new Response(JSON.stringify({ message: "تم الدفع بنجاح", payment }), { status: 201 });
}

export async function GET() {
  await connectDB();
  const payments = await Billing.find({}).populate("userId", "name email").sort({ date: -1 });
  return new Response(JSON.stringify(payments), { status: 200 });
}

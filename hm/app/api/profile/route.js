import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    await connectDB();
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid token" }), { status: 401 });
  }
}

export async function PATCH(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { name, phone, address, profileImage } = await req.json();
    await connectDB();

    const updatedUser = await User.findByIdAndUpdate(
      decoded.userId,
      { name, phone, address, profileImage, updatedAt: Date.now() },
      { new: true }
    ).select("-password");

    return new Response(JSON.stringify({ user: updatedUser }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Update failed" }), { status: 500 });
  }
}

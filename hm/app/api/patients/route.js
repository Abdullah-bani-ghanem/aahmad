import { NextResponse } from "next/server";
import { connectDB } from '../../lib/db'
 const  Patient = require("../../models/Patient");
 const  Prescription = require("../../models/Prescription");

export async function GET(request) {
  try {
    await connectDB();
    const patients = await Patient.find();
    return NextResponse.json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    return NextResponse.json({ error: "Failed to fetch patients" }, { status: 500 });
  }
}




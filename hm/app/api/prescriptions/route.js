import { NextResponse } from "next/server";
import { connectDB } from '../../lib/db'
const Prescription = require("../../models/Prescription");

export async function GET(request) {
    try {
      await connectDB();
      const prescriptions = await Prescription.find().populate("patientId", "name");
      console.log(prescriptions);
      return NextResponse.json(prescriptions);
    } catch (error) {
      console.error("Error fetching prescriptions:", error.message, error.stack);
      return NextResponse.json({ error: "Failed to fetch prescriptions", details: error.message }, { status: 500 });
    }
  }

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { patientId, doctorId, medication, dosage } = body;

    if (!patientId || !doctorId || !medication || !dosage) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const prescription = new Prescription({
      patientId,
      doctorId,
      medication,
      dosage,
    });

    await prescription.save();
    return NextResponse.json(prescription, { status: 201 });
  } catch (error) {
    console.error("Error adding prescription:", error);
    return NextResponse.json({ error: "Failed to add prescription" }, { status: 500 });
  }
}
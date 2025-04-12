import { connectDB } from '@/app/lib/db'

import Pat from '@/app/models/Pat'

export async function POST(req) {
  try {
    await connectDB()
    const body = await req.json()
    const patient = await Pat.create(body)
    return Response.json({ success: true, patient })
  } catch (err) {
    console.error('❌ Error in /api/patients/new:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}

  export async function GET() {
    try {
      await connectDB()
      const patients = await Pat.find().sort({ createdAt: -1 })
      return Response.json(patients)
    } catch (err) {
      console.error('❌ Error fetching patients:', err)
      return Response.json({ error: 'Internal server error' }, { status: 500 })
    }
  }
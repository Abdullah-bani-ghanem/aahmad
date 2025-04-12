import { connectDB } from '../../../lib/db'
import Doc from '../../../models/Doc'

export async function GET(req, { params }) {
  try {
    await connectDB()
    const doctor = await Doc.findById(params.id)
    if (!doctor) return Response.json({ error: 'الطبيب غير موجود' }, { status: 404 })
    return Response.json(doctor)
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB()
    const data = await req.json()
    const updated = await Doc.findByIdAndUpdate(params.id, data, { new: true })
    if (!updated) return Response.json({ error: 'الطبيب غير موجود' }, { status: 404 })
    return Response.json(updated)
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB()
    const deleted = await Doc.findByIdAndDelete(params.id)
    if (!deleted) return Response.json({ error: 'الطبيب غير موجود' }, { status: 404 })
    return Response.json({ message: 'تم الحذف بنجاح' })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}

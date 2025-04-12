import { connectDB } from '../../../lib/db'
import Pat from '../../../models/Pat'


export async function GET(req, { params }) {
    try {
      await connectDB()
      const patient = await Pat.findById(params.id)
  
      if (!patient) {
        return Response.json({ error: 'المريض غير موجود' }, { status: 404 })
      }
  
      return Response.json(patient)
    } catch (err) {
      return Response.json({ error: 'حدث خطأ أثناء جلب البيانات' }, { status: 500 })
    }
  }

export async function PUT(req, { params }) {
    await connectDB()
    const data = await req.json()
    const updated = await Pat.findByIdAndUpdate(params.id, data, { new: true })
    if (!updated) {
      return Response.json({ error: 'المريض غير موجود' }, { status: 404 })
    }
    return Response.json(updated)
  }

export async function DELETE(req, { params }) {
  try {
    await connectDB()
    const deleted = await Pat.findByIdAndDelete(params.id)
    if (!deleted) return Response.json({ error: 'المريض غير موجود' }, { status: 404 })

    return Response.json({ message: 'تم حذف المريض بنجاح' })
  } catch (err) {
    console.error('❌ Error deleting patient:', err)
    return Response.json({ error: 'فشل في الحذف' }, { status: 500 })
  }
}







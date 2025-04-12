import { connectDB } from '../../../lib/db'
import Doc from '../../../models/Doc'

export async function POST(req) {
    try {
      await connectDB()
      const body = await req.json()
  
      console.log('📥 بيانات الطبيب المستلمة:', body) // 👈 لعرض البيانات المستلمة
  
      const doctor = await Doc.create(body)
      return Response.json(doctor)
    } catch (err) {
      console.error('❌ Error creating doctor:', err.message) // 👈 لعرض الخطأ
      return Response.json({ error: 'فشل في إنشاء الطبيب' }, { status: 500 })
    }
  }

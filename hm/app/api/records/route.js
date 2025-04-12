import { connectDB } from '../../lib/db'
import Appo from '../../models/Appo'

export async function POST(req, res) {
  try {
    await connectDB();
    
    const body = await req.json();
    const appointment = await Appo.create(body);

    // إرسال الاستجابة باستخدام res.json
    return res.status(201).json(appointment); // قمنا بتحديد الحالة 201 لأن الموعد تم إنشاؤه بنجاح
  } catch (err) {
    console.error('❌ Error creating appointment:', err);
    // إرجاع استجابة خطأ 500 في حال حدوث أي خطأ
    return res.status(500).json({ error: 'حدث خطأ أثناء إنشاء الموعد' });
  }
}
  
  export async function GET() {
    try {
      await connectDB()
      const appointments = await Appo.find().sort({ createdAt: -1 })
      return Response.json(appointments)
    } catch (err) {
      return Response.json({ error: 'حدث خطأ أثناء جلب المواعيد' }, { status: 500 })
    }
  }

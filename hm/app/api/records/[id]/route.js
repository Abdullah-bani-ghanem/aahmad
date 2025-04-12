import { connectDB } from '../../../lib/db';
import Appo from '../../../models/Appo';

// GET method to fetch an appointment by ID
export async function GET(req, { params, res }) {
    await connectDB();

    try {
        const appointment = await Appo.findById(params.id)
            .populate('doctor')
            .populate('patient');

        if (!appointment) {
            return res.status(404).json({ error: 'الموعد غير موجود' });
        }

        return res.status(200).json(appointment);
    } catch (error) {
        console.error('❌ Error fetching appointment:', error);
        return res.status(500).json({ error: 'حدث خطأ أثناء تحميل الموعد' });
    }
}

// PUT method to update an appointment by ID
export async function PUT(req, { params, res }) {
    try {
        await connectDB();
        const data = await req.json();

        const updated = await Appo.findByIdAndUpdate(params.id, data, { new: true });

        if (!updated) {
            return res.status(404).json({ error: 'الموعد غير موجود' });
        }

        return res.status(200).json(updated);
    } catch (err) {
        console.error('❌ Error updating appointment:', err);
        return res.status(500).json({ error: 'حدث خطأ أثناء تحديث الموعد' });
    }
}

// DELETE method to delete an appointment by ID
export async function DELETE(req, { params, res }) {
    try {
        await connectDB();
        const deleted = await Appo.findByIdAndDelete(params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'الموعد غير موجود' });
        }

        return res.status(200).json({ message: 'تم حذف الموعد' });
    } catch (err) {
        console.error('❌ Error deleting appointment:', err);
        return res.status(500).json({ error: 'حدث خطأ أثناء حذف الموعد' });
    }
}

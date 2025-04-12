
import mongoose from 'mongoose'
const appointmentSchema = new mongoose.Schema(
  {
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    reason: { type: String }
  },
  { timestamps: true }
)


export default mongoose.models.Appo || mongoose.model("Appo", appointmentSchema);


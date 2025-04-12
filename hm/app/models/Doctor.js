import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    availability: {
      days: [String],
      timeSlots: [String]
    },
    gender: {
        type: String,
        required: true,
      },
    bio: String,
  },
  { timestamps: true }
)

export default mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema)
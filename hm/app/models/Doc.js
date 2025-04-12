import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: {
        type: String,
        required: true,
      },
    bio: String,
  },
  { timestamps: true }
)

export default mongoose.models.Doc|| mongoose.model('Doc', doctorSchema)

import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  phone: String,
  condition: String,
}, { timestamps: true })

export default mongoose.models.Pat || mongoose.model('Pat', PatientSchema)

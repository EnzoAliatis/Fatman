import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  career: {
    type: String,
    required: true
  },
  cedula: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  faculty: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  itinerary: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true
  },
  typeStudent: {
    type: String,
    required: true
  },
  vPaid: {
    type: Number,
    required: true
  },
  vGenered: {
    type: Number,
    required: true
  },
  subjects: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'subject'
  }
}, {
  timestamps: true,
  collection: 'student'
})

export default mongoose.model('Student', studentSchema)

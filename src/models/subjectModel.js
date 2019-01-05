import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema({
  classroom: {
    type: String,
    required: true
  },
  days: [Number],
  faults: {
    type: Number
  },
  formation: {
    type: String
  },
  hours: [String],
  name: {
    type: String,
    required: true
  },
  parallel: {
    type: String,
    required: true
  },
  schedule: {
    type: Array,
    required: true
  },
  scoreParcials: [Number],
  teacherEmail: {
    type: String,
    required: true
  },
  teacherName: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'subject'
})

export default mongoose.model('Subject', subjectSchema)

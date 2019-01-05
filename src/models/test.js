import mongoose from 'mongoose'

const testSchema = new mongoose.Schema({
  name: {
    type: String
  }
}, {
  timestamps: true,
  collection: 'collectionTest'
})

export default mongoose.model('Test', testSchema)

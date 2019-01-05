import model from '../models/subjectModel'

/*
 * TODO:
 * CRUD
*/
export default {
  create: async (data) => {
    const subject = await model.create(data)
    return subject
  },
  findAll: async () => {
    const subjects = await model.find({})
    return subjects
  },
  findAllById: async (data) => {
    const subjects = await model.find({ '_id': { $in: data } })
    return subjects
  },
  findById: async (id) => {
    const subject = await model.findOne({ '_id': id })
    return subject
  }
}

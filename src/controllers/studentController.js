import model from '../models/studentModel'
/*
 * TODO:
 * CRUD
*/
export default {
  create: async (data) => {
    const student = await model.create(data)
    return student
  },
  findAll: async () => {
    const students = await model.find({})
    return students
  },
  findById: async (id) => {
    const student = await model.findById(id)
    return student
  },
  findByCedulaPass: async (cedula, password) => {
    const student = await model.findOne({
      cedula,
      password
    })
    return student
  }
}

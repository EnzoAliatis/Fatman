import model from '../models/test'

export default {
  findAll: async () => {
    const allTest = await model.find({})
    console.log(allTest)
    return allTest
  }
}

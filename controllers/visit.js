const utils = require('../utils/index')
const visitModel = require('../models/visit')

const getVisitsFromFile = async () => {
  return JSON.parse(await utils.readFile(utils.resolvePath('static/data/visits.json'), 'utf8'))
}

const getVisits = async() => {
  return await visitModel.find()
}

module.exports = {
  getVisitsFromFile,
  getVisits
}
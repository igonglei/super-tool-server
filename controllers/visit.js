const utils = require('../utils/index')
const visitModel = require('../models/visit')

const getVisitsFromFile = async () => {
  return JSON.parse(await utils.readFile(utils.resolvePath('static/data/visits.json'), 'utf8'))
}

const getVisits = async params => {
  return await visitModel.find(params.query)
}

module.exports = {
  getVisitsFromFile,
  getVisits
}
const utils = require('../utils/index')
const visitModel = require('../models/visit')

class VisitController {
  static async getVisits(params) {
    return await visitModel.find(JSON.parse(params.query || '{}'))
  }
  static async getVisitsFromFile() {
    return JSON.parse(await utils.readFile(utils.resolvePath('static/data/visits.json'), 'utf8'))
  }
}

module.exports = VisitController
const utils = require('../utils/index')
const logModel = require('../models/log')

class LogController {
  static async getLogs(params) {
    let { query, projection, page, size, sort, order } = params
    query = JSON.parse(query || '{}')
    page = parseInt(page || 0)
    let limit = parseInt(size || 0)
    let skip = (page - 1) * limit
    let sortOption = (sort && order) ? { [sort]: order } : {}
    return {
      rows: await logModel.find(query, projection, { sort: sortOption, limit, skip }),
      total: await logModel.count(query)
    }
  }
  static async getLogsFromFile() {
    return JSON.parse(await utils.readFile(utils.resolvePath('static/data/logs.json'), 'utf8'))
  }
  static async addLogs(log) {
    return await logModel.create(log)
  }
  static async updateLogs(log) {
    return await logModel.findByIdAndUpdate(log._id, log, { new : true })
  }
  static async deleteLogs(id) {
    return await logModel.findByIdAndDelete(id)
  }
}

module.exports = LogController
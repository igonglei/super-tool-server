const utils = require('../utils/index')
const logModel = require('../models/log')

const getLogsFromFile = async () => {
  return JSON.parse(await utils.readFile(utils.resolvePath('static/data/logs.json'), 'utf8'))
}

const getLogs = async params => {
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

module.exports = {
  getLogsFromFile,
  getLogs
}
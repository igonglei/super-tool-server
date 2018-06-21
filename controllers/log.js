const utils = require('../utils/index')
const logModel = require('../models/log')

const getLogsFromFile = async () => {
  return JSON.parse(await utils.readFile(utils.resolvePath('static/data/logs.json'), 'utf8'))
}

const getLogs = async params => {
  return {
    rows: await logModel.find(params.query, params.projection, params.option),
    total: await logModel.count(params.query)
  }
}

module.exports = {
  getLogsFromFile,
  getLogs
}
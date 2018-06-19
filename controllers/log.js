const utils = require('../utils/index')
const logModel = require('../models/log')

const getLogsFromFile = async() => {
  return JSON.parse(await utils.readFile(utils.resolvePath('static/data/logs.json'), 'utf8'))
}

const getLogs = async() => {
  return await logModel.find()
}

module.exports = {
  getLogsFromFile,
  getLogs
}
const utils = require('../utils/index')

const getLogs = async () => {
  return JSON.parse(await utils.readFile(utils.resolvePath('static/data/logs.json'), 'utf8'))
}

module.exports = {
  getLogs
}
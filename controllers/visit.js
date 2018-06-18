const utils = require('../utils/index')

const getVisits = async () => {
  return JSON.parse(await utils.readFile(utils.resolvePath('static/data/visits.json'), 'utf8'))
}

module.exports = {
  getVisits
}
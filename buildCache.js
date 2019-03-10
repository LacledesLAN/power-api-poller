const superagent = require('superagent')
const config = require('./config')
const {fillCache} = require('./cache')

module.exports = async () => {
  console.info('buildCache')
  const {body} = await superagent.get(`${config.emoncmsHost}/feed/list.json`).set('Authorization', `Bearer ${config.apiKey}`)
  fillCache(body)
}


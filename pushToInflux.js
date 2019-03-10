const superagent = require('superagent')
const config = require('./config')
const {getCache} = require('./cache')
const write = require('./influxdb')

const getIds = _ => _.id

const buildDatapoints = (schema, values) => schema.map((feed, i) => ({
  id: feed.id,
  name: feed.name,
  unit: feed.unit || 'Unknown',
  value: values[i]
}))

module.exports = async () => {
  console.info('pushToInflux')
  const cache = getCache()
  console.info(cache.map(getIds).join(','))
  if (cache.length > 0) {
    const {body: values} = await superagent.get(`${config.emoncmsHost}/feed/fetch.json`)
      .set('Authorization', `Bearer ${config.apiKey}`)
      .query({ids: cache.map(getIds).join(',')})
    const writes = buildDatapoints(cache, values).map(write)
    await Promise.all(writes)
    console.info('all datapoints written')
  }
}

const { config } = require('./package.json')

module.exports = {
  apiKey: process.env.API_KEY,
  emoncmsHost: process.env.EMONCMS_HOST || config.emoncmsHost,
  influxHost: process.env.INFLUX_HOST || config.influxHost,
  influxDb: process.env.INFLUX_DB || config.influxDb,
  influxUser: process.env.INFLUX_USER,
  influxPassword: process.env.INFLUX_PASSWORD,
  influxProtocal: process.env.INFLUX_PROTOCAL
}
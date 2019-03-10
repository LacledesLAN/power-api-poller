if (!process.env.API_KEY || !process.env.INFLUX_PASSWORD || !process.env.INFLUX_USER) {
  console.error('The following environment variables are required:  API_KEY, INFLUX_PASSWORD, INFLUX_USER\n')
  process.exit(1)
}

const config = require('./config')
const cron = require('node-cron')
const buildCache = require('./buildCache')
const pushToInflux = require("./pushToInflux")

const run = async () => {
  await buildCache()

  cron.schedule('*/10 * * * *', buildCache, {scheduled: true})
  cron.schedule('*/10 * * * * *', pushToInflux, {scheduled: true})
}

run()
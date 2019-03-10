const Influx = require('influxdb-nodejs')
const { influxHost, influxDb, influxUser, influxPassword, influxProtocal } = require('./config')

const fields = {
  value: 'f',
};
const tags = {
  id: '*',
  name: '*',
  uom: '*'
}

const client = new Influx(`${influxProtocal || 'http'}://${influxUser}:${influxPassword}@${influxHost}/${influxDb}`)

client.schema('Power_Draw', fields, tags, {
  stripUnknown: true
})

module.exports = async ({id, name, value, unit}) => {
  try {
    console.info({id, name, value, unit})
    return await client.write('Power_Draw').tag({id, name, uom: unit}).field({value})
  } catch (e) {
    console.error(e)
    // throw e
  }
}
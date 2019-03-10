let cache = {}

const getCache = () =>cache.map(_ => ({
  id: _.id,
  name: _.name,
  unit: _.unit
}))

const fillCache = newCache => {
  cache = [...Object.values(newCache)]
}
module.exports = {
  fillCache,
  getCache
}
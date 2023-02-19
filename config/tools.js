const { dependencies } = require('../package.json')

const CustomDependencies = ['leaflet']

const getSharedDependencies = () =>
  Object.keys(dependencies).reduce((res, key) => {
    if (!CustomDependencies.includes(key)) {
      res[key] = dependencies[key]
    }

    return res
  }, {})

module.exports = {
  getSharedDependencies,
}

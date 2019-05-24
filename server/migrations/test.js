const csv = require('csvtojson')
const path = require('path')

try {
  csv()
    .fromFile(path.resolve(__dirname, '../seed-data/company.csv'))
    .then(json => {
      console.log('JSON', json)
    })
} catch (e) {
  console.error(e)
}

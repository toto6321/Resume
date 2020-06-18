const fs = require('fs')

const dataFile = './src/data.js'
const templateFile = './src/data.template.js'

try {
    fs.accessSync(dataFile)
} catch (e) {
    console.warn(`${dataFile} is not found! \nIt will be created as a copy of ${templateFile}.`)
    fs.copyFileSync(templateFile, dataFile)
}
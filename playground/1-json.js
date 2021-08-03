const fs = require('fs')

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

user.name = 'Dara'
user.age = 23 

const dataJSON = JsSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON) 

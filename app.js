var express = require('express')
var server = express()
var cors = require('cors')
var knex = require('./db/knex')

server.use(cors());

// server.get('/', function(req, res) {
//   knex('inventory').then((inventory) => {
//     res.json(inventory)
//   })
// })

server.get('/', (req, res) => {
  res.send('hello')
})

server.listen(process.env.PORT || 8080)

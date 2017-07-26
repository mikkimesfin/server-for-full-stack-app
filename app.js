var express = require('express')
var server = express()
var cors = require('cors')
var knex = require('./db/knex')
var bodyParser = require('body-parser')

server.use(cors());

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))

server.get('/', function(req, res) {
  knex('inventory').then((inventory) => {
    res.json(inventory)
  })
})
server.get('/:id', function(req, res) {
  var id= req.params.id
  knex('inventory').where("id", id)
  .then((inventory) => {
    res.json(inventory)
    console.log(inventory)
  })
})

server.post('/', function(req, res) {
  knex('inventory').insert(req.body)
  .returning('id')
  .then((inventory) => {
    res.json(inventory)
    console.log(inventory)
  })
})
server.listen(process.env.PORT || 8080)

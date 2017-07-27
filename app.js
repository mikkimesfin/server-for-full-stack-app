var express = require('express')
var server = express()
var inventory = require('./routes/inventory')
var cors = require('cors')
var bodyParser = require('body-parser')

server.use(cors());

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))

server.get('/', (req,res) => {
  res.send("inventory")

})


server.use('inventory', inventory)


server.listen(process.env.PORT || 8080)

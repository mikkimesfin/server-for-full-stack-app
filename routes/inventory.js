var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

router.get('/', function(req, res) {
  knex('inventory').then((inventory) => {
    res.json(inventory)
  })
})

router.post('/', function(req, res) {
  if (validate(req.body)) {
    var type = req.body.type
    var brand = req.body.brand
    var price = req.body.price

    knex('inventory').insert({
        type: type,
        brand: brand,
        price: price
      }).returning('id')
      .then((id) => {
        res.send(id)
      })
  } else {
    res.status(500)
    res.json({
      message: 'sorry but that did not work'
    })
  }
})

router.get('/:id', (req, res) => {
  var id = req.params.id
  knex('inventory').where('id', id)
    .then((data) => {
      res.json(data)
    })
})

router.put('/:id', (req, res) => {
  if (validate(req.body)) {
    let id = req.params.id
    let type = req.body.type
    let brand = req.body.brand
    let price = req.body.price


    knex('inventory').where('id', id)
      .update({
        type: type,
        brand: brand,
        price: price
      }).returning('*')
      .then((data) => {
        res.send(data)
      })
  } else {
    res.status(500)
    res.json({
      message: 'sorry try again'
    })
  }
})


router.delete('/:id', (req, res) => {
  let id = req.params.id


  knex('inventory').where('id', id)
    .del()
    .then(() => {
      res.json({
        message: 'Success'
      })
    })
})


module.exports = router;

function validate(data) {
  var verifyType = typeof data.type == 'string' && data.type.trim() != ''
  var verifyBrand = typeof data.brand == 'string' && data.brand.trim() != ''
  var verifyPrice = !isNaN(data.price)

  return verifyType && verifyBrand && verifyPrice
}

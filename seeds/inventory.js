
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "inventory"; ALTER SEQUENCE inventory_id_seq RESTART WITH 6')
    .then(function() {
      var inventory = [{
      id:1,
      brand: 'maybelline',
      type: 'mascara',
      price: null
    },
    {
      id:2,
      brand: 'mac',
      type: 'concealer',
      price:null
    },
    {
      id:3,
      brand: 'nyx',
      type: 'concealer',
      price: null
    },
    {
      id:4,
      brand: 'BECCA',
      type: 'highlighter',
      price: null
    },
    {
      id:5,
      brand: 'NARS',
      type: 'foundation',
      price: null
      }]
      return knex('inventory').insert(inventory)
    })
}

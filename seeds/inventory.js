
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "inventory"; ALTER SEQUENCE inventory_id_seq RESTART WITH 6')
    .then(function() {
      var inventory = [{
      id:1,
      brand: 'maybelline',
      type: 'mascara',
      price: 5.00
    },
    {
      id:2,
      brand: 'mac',
      type: 'concealer',
      price: 18.00
    },
    {
      id:3,
      brand: 'nyx',
      type: 'concealer',
      price: 4.00
    },
    {
      id:4,
      brand: 'BECCA',
      type: 'highlighter',
      price: 38.00
    },
    {
      id:5,
      brand: 'NARS',
      type: 'foundation',
      price: 47.00
      }]
      return knex('inventory').insert(inventory)
    })
}

function Shop() {

}

// | Item | Price | Special offers |
// +------+-------+----------------+
// | A    | 50    | 3A for 130     |
// | B    | 30    | 2B for 45      |
// | C    | 20    |                |
// | D    | 15    |         

prices = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
}

Shop.prototype = {
  constructor: Shop,

  checkout: function(shoppingItem) {
    return prices[shoppingItem]
  }
}
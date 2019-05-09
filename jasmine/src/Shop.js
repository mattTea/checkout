function Shop() {

}

prices = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
}

Shop.prototype = {
  constructor: Shop,

  checkout: function(shoppingItems) {
    bill = 0
    for (var i = 0; i < shoppingItems.length; i++) {
      bill += prices[shoppingItems[i]]
    }
    return bill
  }
}
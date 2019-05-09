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
    if (this.checkFor3AItems(shoppingItems)) bill -= 20
    return bill
  },

  checkFor3AItems: function(shoppingItems) {
    aCount = 0
    for (var i = 0; i < shoppingItems.length; i++) {
      if (shoppingItems[i] === "A") {
        aCount += 1
      }
    }
    if (aCount < 3) {
      return false
    } else {
      return true
    }
  }
}
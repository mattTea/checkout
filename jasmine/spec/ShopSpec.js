describe("Shop", function() {
  var shop
  
  beforeEach(function() {
    shop = new Shop
  })

  it("returns 50 for checking out item A", function() {
    expect(shop.checkout("A")).toEqual(50)
  })

  it("returns 30 for checking out item B", function() {
    expect(shop.checkout("B")).toEqual(30)
  })

  it("returns 35 for checking out items C and D", function() {
    expect(shop.checkout("CD")).toEqual(35)
  })

  it("returns 115 for checking out items A, B, C and D", function() {
    expect(shop.checkout("ABCD")).toEqual(115)
  })
})
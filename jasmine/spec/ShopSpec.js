describe("Shop", function() {
  it("returns 50 for checking out item A", function() {
    var shop = new Shop
    expect(shop.checkout("A")).toEqual(50)
  })

  it("returns 30 for checking out item B", function() {
    var shop = new Shop
    expect(shop.checkout("B")).toEqual(30)
  })
})
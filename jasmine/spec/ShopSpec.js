describe("Shop", function() {
  it("checkout returns 50 for item A", function() {
    var shop = new Shop
    expect(shop.checkout("A")).toEqual(50)
  })
})
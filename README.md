Checkout
========

Implement a supermarket checkout that calculates the total price of a number of items
- to be run in a REPL like IRB. Don't worry about I/O.
- (actually run in the browser console)


## Requirements

In a normal supermarket, things are identified using Stock Keeping Units, or SKUs. In our store, we'll use individual letters of the alphabet (A, B, C, and so on). Our goods are priced individually. In addition, some items are multi-priced: buy n of them, and they'll cost you y pounds.

For example, item A might cost 50 pounds individually, but this week we have a special offer:

buy three As and they'll cost you 130.
Our price table and offers:

```
+------+-------+----------------+
| Item | Price | Special offers |
+------+-------+----------------+
| A    | 50    | 3A for 130     |
| B    | 30    | 2B for 45      |
| C    | 20    |                |
| D    | 15    |                |
+------+-------+----------------+
```

### Notes:

For any illegal input (non capitals) simply return -1
In order to complete the round you need to implement the following method: checkout(String) -> Integer


### Where:

param[0] = eg. 'AAB', a String containing the SKUs of all the products in the basket
@return = eg. 120, an Integer representing the total checkout value of the items

------

## Acceptance Criteria

1. shop.checkout('aBc') # => -1
2. shop.checkout('-B8x') # => -1
3. shop.checkout(18) # => -1
4. shop.checkout('AA') # => 100
5. shop.checkout('ABCD') # => 115
6. shop.checkout('AAA') # => 130
7. shop.checkout('AAAAAA') # => 260

------

## Breakdown

1. shop = new Shop

2. checkout() function takes a string of chars, each representing a SKU

3. checkout for a single, simple item (no discount)

4. checkout for 2 simple items (no discount)

5. checkout multiple items (no discount)

------

_Got to starting this next one but not finishing in 30 mins_

------

6. checkout 3 A's with discount 

------

_Finished first test on the discounted A's acceptance criteria after another 5-10 mins_

------

## Reflection

- Completed ACs `4` and `5` (in 30 minute process review window)
- Completed AC `6` 10 mins after time (40 mins)

- Link to screen recording [here](https://drive.google.com/open?id=1u8HlX6hcDxB1OgHVAF1QAznS6uganmyh)


### Improvements

1. Focus on the ACs that need to be met when breaking things down
2. Next small step to pass next easy test, still making some bigger jumps

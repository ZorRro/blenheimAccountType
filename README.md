# Account Type Categories
* Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
* Type 🅱 is one where the balance amount changes by the same amount each month.


### Account Type Function
**accountTypeChecker** is a function (JavaScript) such that given a accountBalanceHistory array as an argument, it will categorise the array based on the way that the balance value is changing month by month.

Structure of input array 
  [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // current month
      account: {
        balance: { amount: 10 },
      },
    },
  ]


### Testing
run `npm start` OR
run `npm run test`

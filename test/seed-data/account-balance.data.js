module.exports.AccountTypeB = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
]

module.exports.AccountTypeA = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 200 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
]

module.exports.AccountTypeBlankB = [
  
]

module.exports.AccountTypeMinimalB = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
]

module.exports.AccountTypeDoubleB = [
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

module.exports.AccountTypeNonDecreasingA = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 300 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
]
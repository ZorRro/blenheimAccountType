const assert = require('chai').assert

const { accountTypeChecker } = require('../src/account-checker')
const seedData = require('./seed-data/account-balance.data')

describe('Test Cases for Account Type Check', function() {

  // Basic Case A
  it("Should Return Account Type 'A'", () => {
    assert.equal(accountTypeChecker(seedData.AccountTypeA), "A")
  })

  // Basic Case B
  it("Should Return Account Type 'B'", () => {
    assert.equal(accountTypeChecker(seedData.AccountTypeB), "B")
  })

  // Assuming Blank Account to be considered to be of type 'B'
  it("Should Return Account Type 'B'", () => {
    assert.equal(accountTypeChecker(seedData.AccountTypeBlankB), "B")
  })

  // Assuming Single Month's Balance Account to be considered to be of type 'B'
  it("Should Return Account Type 'B'", () => {
    assert.equal(accountTypeChecker(seedData.AccountTypeMinimalB), "B")
  })

  // Assuming Two Month's Balance Account to be considered to be of type 'B'
  it("Should Return Account Type 'B'", () => {
    assert.equal(accountTypeChecker(seedData.AccountTypeDoubleB), "B")
  })

  // Basic Case A
  it("Should Return Account Type 'A'", () => {
    assert.equal(accountTypeChecker(seedData.AccountTypeNonDecreasingA), "A")
  })
})

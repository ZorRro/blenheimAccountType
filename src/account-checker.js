const accountTypeChecker = (accountBalanceHistory) => {
 
  let result = true;
  if (accountBalanceHistory.length < 2){ 
    return "B" 
  } else {
    let diff = accountBalanceHistory[1]['account']['balance']['amount']
    - accountBalanceHistory[0]['account']['balance']['amount']

    for(let i = 2; i < accountBalanceHistory.length; i++) {
      let curDiff = accountBalanceHistory[i]['account']['balance']['amount']
      - accountBalanceHistory[i-1]['account']['balance']['amount']  
      if (curDiff !== diff) {
        result = false;
        break;
      }
    }
  }
  return result ? "B" : "A";
};

module.exports = {
  accountTypeChecker
}

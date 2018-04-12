var coins={
    'p':1,
    'n':5,
    'd':10,
    'q':25
}

var coinNames=['q','d','n','p'];

 function getAmount (coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter  
    if (coins[coinType]) {
        return coins[coinType];
    }else {
        throw new Error('Unrecognized coin ' + coinType);
    }
  }

 function convertToChange(currentBalance) {
    var change = [];
        for(var i in coinNames){
          var coinType = coinNames[i];
          var coinValue = coins[coinType];

          while(currentBalance >= coinValue){
            change.push(coinType);
            currentBalance -= coinValue;
          }

        }
    return change;
 }

module.exports = {
    getAmount,
    convertToChange
};
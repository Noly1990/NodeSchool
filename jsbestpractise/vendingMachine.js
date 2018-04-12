var {
  increaseBalance,
  decreaseBalance,
  getBalance,
  canAfford
} = require('./balanceManager');
var changeHandler = require('./changeHandler');
var {
  getProduct,
  products
} = require('./productInventory');




module.exports = {


  insertCoin: function (coinType) {
    var value = changeHandler.getAmount(coinType);
    increaseBalance(value);
  },
  getProducts:function  () {
    return products;
  },

  releaseChange: function () {
    var currentBalance = getBalance();
    decreaseBalance(currentBalance);
    return changeHandler.convertToChange(currentBalance);
  },

  vendProduct: function (productId) {
    var product = getProduct(productId);
    decreaseBalance(product.price);
    return product;
  }

};
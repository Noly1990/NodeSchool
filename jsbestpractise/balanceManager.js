var balance = 0;

    module.exports = {
        isValidAmount:function(amout){
            if (amout) {
                return true;
            }else {
                return false;
            }
        },
      increaseBalance: function(amount){
        if (!this.isValidAmount(amout)) {
            throw new Error('Insufficient balance');
        }
        balance += amount;
      },
      getBalance: function(){
        return balance;
      },
      canAfford: function(amount){
        return amount <= balance;
      },
      decreaseBalance: function(amount){
        if(!this.canAfford(amount)){
          throw new Error('Insufficient balance');
        }
        balance -= amount;
      }
};
function doubleAll(numbers) {
    var result = []
    if (numbers.length>0) {
        return numbers.map(function(item){
            return 2*item;
        })
    }else {
        return []
    }
  }
  
  module.exports = doubleAll
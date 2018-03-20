function duckCount() {
  // SOLUTION GOES HERE
  var arguArr=Array.prototype.slice.call(arguments);
  let result=arguArr.reduce(function(count,item,index,arr){
    if (Object.prototype.hasOwnProperty.call(item,'quack')) {
        console.log(count)
        count++;
    }
    return count;

  },0)
  return result;
}

module.exports = duckCount;

var slice = Array.prototype.slice;
var push = Array.prototype.push;

function curryN(fn, n) {
  var argsL = n || fn.length;
  console.log(fn.name + "length", argsL);
  var argsArr = [];
  var index = 0;
  var tempI = index;
  return function task() {
    if (arguments.length > 1) {
      console.log(fn.name, slice.call(arguments));
      var tempIndex = slice.call(arguments)[0];
      argsArr[tempIndex] = slice.call(arguments)[1];
      console.log("index", tempIndex);
    } else {
      argsArr.push(slice.call(arguments)[0]);
    }
    console.log(argsArr);
    if (tempIndex === argsL - 1) {
      return fn.call(this, ...argsArr);
    } else {
      var temp = tempIndex + 1;
      return function() {
        return task.call(this, temp, ...slice.call(arguments));
      };
    }
  }.bind(this, tempI);
}

module.exports = curryN;

//official solution 认定是单参数的科里化 

// function curryN(fn, n) {
//   n = n || fn.length;
//   return function curriedN(arg) {
//     if (n <= 1) return fn(arg);
//     return curryN(fn.bind(this, arg), n - 1);
//   };
// }

// module.exports = curryN;

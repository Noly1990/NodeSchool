function Spy(target, method) {
    var obj={};
    obj.count=0;
    var oldFuc=target[method];

    target[method]=function(){
        obj.count++;
        return oldFuc.apply(this,arguments)
    }

    return obj;
  }
  
  module.exports = Spy
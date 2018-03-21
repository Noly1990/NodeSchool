module.exports=function slice(arr,begin=0,end=arr.length){
    return Array.prototype.slice.call(arr,begin,end);
}


//official solution
//  module.exports=Function.prototype.call.bind(Array.prototype.slice)
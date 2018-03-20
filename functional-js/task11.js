module.exports = function arrayMap(arr, fn,thisArg) {
    return arr.reduce(function(container,item,index,arr){
        container.push(fn.call(thisArg,item,index,arr))
        return container
     },[])
}
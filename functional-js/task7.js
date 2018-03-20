function reduce(arr, fn, initial) {
    return function reduceIn(index,initial){
        if (index>arr.length-1) {
            return initial;
        }else return reduceIn(index+1,fn(initial,arr[index],index,arr))
    }(0,initial)
}


module.exports = reduce;

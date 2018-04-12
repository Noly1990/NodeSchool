// include the Lo-Dash library
var _ = require("lodash");
    
var worker = function(arr) {
    return _.sortBy(arr,function(o){
        return -o.quantity
    })
};

// export the worker function as a nodejs module
module.exports = worker;
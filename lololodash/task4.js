    // include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(cities) {
        let result={};
        result.hot=[];
        result.warm=[];
        _.forEach(cities,function(perCity,index){
            if (_.every(perCity,function(item){
                return item>19
            })) {
                result.hot.push(index)
            }else if (_.some(perCity,function(item){
                return item>19
            })) {
                result.warm.push(index)
            }
        })

        return result
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;

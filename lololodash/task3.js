// include the Lo-Dash library
var _ = require("lodash");
    
var worker = function(collections) {
   return  _.forEach(collections,function (item) {
        if (item.population>=1) {
            return Object.assign(item,{size:'big'});
        }else if (item.population>0.5&&item.population<1) {
            return Object.assign(item,{size:'med'});
        }else {
            return Object.assign(item,{size:'small'});
        }
    })
};

// export the worker function as a nodejs module
module.exports = worker;


//official solution
// const inEveryCase = function(collection){

//     // add a size attribute to the collection based on the item's population
//     return _.forEach(collection, function(item) {
//       if (item.population > 1) {
//         item.size = "big";
//       } else if(item.population > 0.5) {
//         item.size = "med";
//       } else {
//         item.size = "small";
//       }
//     });
//   };

//   module.exports = inEveryCase;

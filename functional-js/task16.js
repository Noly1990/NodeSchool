function getDependencies(tree) {
  let dependenciesArr=[];
  if (tree.hasOwnProperty('dependencies')) {
    workDenp(tree.dependencies,dependenciesArr);
    //dependencies
    dependenciesArr.sort();
    var set = new Set(dependenciesArr);
    var newArr = Array.from(set);
    return newArr;
  }else {
    return []
  }
}

function workDenp(dependencies,dependenciesArr){
  Object.keys(dependencies).forEach(function(key){
    dependenciesArr.push(key+'@'+dependencies[key]['version']);
    if (dependencies[key].hasOwnProperty('dependencies')) {
      workDenp(dependencies[key].dependencies,dependenciesArr);
    }
  })
}
module.exports = getDependencies;

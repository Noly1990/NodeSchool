function countWords(inputWords) {
  // SOLUTION GOES HERE
  console.log(inputWords)
  return inputWords.reduce(function(countObj, currentWord){
    countObj[currentWord]=++countObj[currentWord] || 1 ;
    return countObj
  },{})
}

module.exports = countWords;

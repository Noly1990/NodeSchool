const fs=require('fs');
let path=process.argv[2];
let file=fs.readFileSync(path);

console.log(file.toString().split('\n').length-1)
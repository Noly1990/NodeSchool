const fs=require('fs');
let path=process.argv[2];
fs.readFile(path,function(err,data){
    console.log(data.toString().split('\n').length-1)
})


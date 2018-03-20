
const fs=require('fs')
const path=require('path')

let fileDir=process.argv[2];
let ext='.'+process.argv[3];
fs.readdir(fileDir,function(err,list){
    if (err) {
        console.log(err)
    }else {
        let newList=list.filter(function(item){
            if (path.extname(item)===ext) {
                return item;
            }
        })
        newList.forEach(function(val){
            console.log(val)
        })
    }
})

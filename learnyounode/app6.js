const fs=require('fs')
const path=require('path')
const work=require('./app6M')

let fileDir=process.argv[2];
let ext=process.argv[3];
work(fileDir,ext,function(err,newList){
    if (err) {
        console.log(err)
    }else {
        newList.forEach(function(val){
            console.log(val)
        })
    }
});
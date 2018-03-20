const fs=require('fs')
const path=require('path')

module.exports=function(dir,ext,cb){
    let newList;
    fs.readdir(dir,function(err,list){
        if (err) {
            cb(err)
        }else {
            newList=list.filter(function(item){
                if (path.extname(item)==='.'+ext) {
                    return item;
                }
            })
            cb(null,newList)
        }
    })
    
}
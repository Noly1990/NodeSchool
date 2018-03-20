

var bl=require('bl');

const http = require('http');

const [a, b, ...list ] = process.argv


function getData(url){

   return new Promise(function(resolve,reject){
    http.get(url,function(res){
        res.pipe(bl(function(err,data){
            if (err) {
                console.error(err)
                reject(err)
            }else {
                resolve(data.toString())
            }
            
        }))
    }).on('error',console.error)
   }) 
}
async function doit(list){
    let data1=await getData(list[0]);
    let data2=await getData(list[1]);
    let data3=await getData(list[2]);
    console.log(data1)
    console.log(data2)
    console.log(data3)
}


doit(list)
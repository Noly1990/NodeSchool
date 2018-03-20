var bl=require('bl');

const http = require('http');


const url=process.argv[2];

http.get(url,function(res){
    res.pipe(bl(function(err,data){
        if (err) {
            console.error(err)
        }else {
            console.log(data.toString('utf-8').length)
            console.log(data.toString('utf-8'))
        }
        
    }))
}).on('error',console.error)

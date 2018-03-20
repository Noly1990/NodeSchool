const http = require('http');
const { URL } = require('url');

const url=process.argv[2];

http.get(url,function(res){
    res.setEncoding('utf-8');
    res.on('data',function(data){
        console.log(data);
    })
    res.on('error',console.error)
    res.on('end',function(){

    })
}).on('error',console.error)

const http=require('http');
const port=process.argv[2]
const fs=require('fs')
const file=process.argv[3]


let server=http.createServer(function(req,res){
    res.writeHead(200, { 'content-type': 'text/plain' })
    let src=fs.createReadStream(file);
    src.pipe(res);
})


server.listen(port)
const http = require('http');
const url = require('url')
let port = Number(process.argv[2]);

let server = http.createServer(function (req, res) {

    const myURL = url.parse(req.url,true);
    if (myURL.pathname == '/api/parsetime') {
        let query=myURL.query;
        let outTime=new Date(query.iso);
        console.log('outTime',outTime)
        let json_t={
            hour:outTime.getHours(),
            minute:outTime.getMinutes(),
            second:outTime.getSeconds()
        }
        console.log(json_t)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(json_t));
    } else if (myURL.pathname == '/api/unixtime') {
        let query=myURL.query;
        let outTime=new Date(query.iso);
        let json_u={
            unixtime:outTime.getTime()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(json_u));
    }else {
        res.writeHead(404)
        res.end()
      }
})

server.listen(port)
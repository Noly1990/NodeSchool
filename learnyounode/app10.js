const net=require('net');


let server = net.createServer(function (socket) {  
    // socket handling logic
    
     socket.end(generateTime())
  })  
  server.listen(process.argv[2])

function convert(num){
    if (num<10) {
        return `0${num}`
    }else {
        return `${num}`
    }
}


function generateTime(){
    let now=new Date();
    let year=now.getFullYear();
    let month=now.getMonth();
    let day=now.getDate();
    let hour=now.getHours();
    let miniute=now.getMinutes();
    let result=`${year}-${convert(month+1)}-${convert(day)} ${convert(hour)}:${convert(miniute)}\n`;
    return result;
}
console.log(process.argv[2])
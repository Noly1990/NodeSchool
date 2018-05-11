var redis = require("redis"),
    client = redis.createClient({
        host: '127.0.0.1',
        port: '6379',
        // password: '123456'
    });


client.on("error", function (err) {
    console.log("Error " + err);
});

client.on("ready", function () {
    //在ready中使用，client.auth()来进行password
    console.log("client Ready")
})

client.on("connect", function () {
    console.log("client connect")
})

client.on("end", function () {

    console.log("client end")
})


client.on('subscribe',function(channel,count){
    console.log('client begin to subcribe')
})

let index=0;

client.on('message',function(channel,message){
    index++;
    console.log(`这是第${index}条消息`,message)
    if (index===20) {
        console.log('已经收到20条信息了，取消订阅!');
        client.unsubscribe('channel1')
    }
})



client.subscribe('channel1')
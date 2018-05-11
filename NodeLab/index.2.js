var redis = require("redis"),
    client = redis.createClient({
        host: '127.0.0.1',
        port: '6379',
        // password: '123456'
    });
// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

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


for (let i=0;i<10;i++) {
    setTimeout(function(){
        client.publish('channel1',`这是第${i}条信息,发自index2`,function(err,reply){
            if (err) {
                console.log(err);
                return ;
            }
            console.log('reply is',reply)
        })
    },1000*i)
}

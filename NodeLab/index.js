var redis = require("redis"),
    client = redis.createClient({
        host: '127.0.0.1',
        port: '6379',
        // password: '123456'
    });

console.log(client)
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

client.set("stringKey", "gjkshgghvjdishgbvligsbdfijgvijashguvhuaish", redis.print);

client.hmset("hashKey", {
    keyName1: "this is key name 1",
    keyName2: "this is key name 2"
}, redis.print);


client.hkeys("hashKey", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });

});


for (let i = 1; i < 10; i++) {
    client.rpush('onlineUsers', i, redis.print)
    client.zadd('zaddKey', i, i + '11111')
}

client.quit()
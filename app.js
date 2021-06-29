const express = require("express");
const app = express();
app.use(express.json());
let PORT = process.env.PORT || 5000;

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

function filter(req, res, next){
    let message= req.body.content;
    var abuses = ["gadha", "stupid"]
    for(let i=0; i<abuses.length; i++){
        message = message.replace(abuses[i], "*")
    }
    req.body.content = message;
    next();
}

app.post("/message",filter,function(req,res){
    res.json(req.body);
    console.log("hello");
})

app.listen(PORT, function(er){
    if(er){
        console.log(er);
    }
    else{
        console.log("server is running")
    }
})

//1. the array with the for loop
// Deklarasi env
const express= require('express');
const app = express();

// var server = app.listen(3000, ((listening)=>{console.log("Listening.....")}))

// app.use(express.static("public"));

app.get("/", ((req, res)=>{
    res.send("home")
}));

app.get("/search", ((req, res)=>{
    res.send("search")
}));

app.get("/search/:sub", ((req, res)=>{
    res.send("search sub" + req.params.sub)
}));

app.get("/search/:sub/:id", ((req, res)=>{
    res.send("search sub" + req.params.id);
}));
// Deklarasi env
const express= require('express');
const app = express();

const port = process.env.PORT ? process.env.PORT : 4000;

const server= app.listen(port, () => {
  console.log(`Server Running on port: ${port}`);
});

app.use(express.static("public"));

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
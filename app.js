const express = require ('express');
const app = express();
const bodyParser = require ('body-parser')
const path = require ('path');
app.listen(3000,()=>{
console.log("Servidor ejecutandose en el puerto 3000")
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
});
app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
});
app.post('/register', (req,res)=>{
    console.log(req.body)
    res.redirect("/")
});
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
});
app.post('/login', (req,res)=>{
    console.log(req.body)
    res.redirect("/")
});
var express = require("express");
var hbs=require("hbs");

var app=express();

var port=process.env.PORT || 3000;

app.set('view engine','hbs');

app.use(express.static(__dirname+'./'))

app.get('/',(req,res)=>{
res.render('index.hbs',{
    title:"first page",
    footer:"Copyright"+new Date().getFullYear(),
    heading:"WELCOME"
})
})
app.get('/about',(req,res)=>{
    res.render('index.hbs',{
        title:"first page",
        footer:"Copyright"+"   "+new Date().getFullYear(),
        heading:"About Page"
    })
})
app.get('/bad',(req,res)=>{
    res.render('index.hbs',{
        title:"first page",
        footer:"Copyright"+new Date().getFullYear(),
        heading:"Bad Request , Page Not Found"
    })
})

app.listen(port,function () {
    console.log("The Server Is Running");
});

const express = require('express');
const app = express();
const fs = require('fs');

app.get('',function(req,res){

    fs.readFile('./app2.html',function(error,data){

        res.write(data);
        return res.end();
    })
    
})

app.get('/home',(req,res)=>{
    fs.readFile('./2app2.html',(error,data)=>{

        res.write(data);
        return res.end();
    })
})

app.get('/news',(req,res)=>{

    fs.readFile('3app2.html',(error,data)=>{

        res.write(data);
        return res.end();
    })
})

app.get('/contact',(req,res)=>{

    fs.readFile('./4app2.html',(error,data)=>{
        res.write(data);
        return res.end();
    })
})

app.get('/about',(req,res)=>{

    fs.readFile('./5app2.html',(error,data)=>{
        res.write(data);
        return res.end();
    })
})

app.listen(2000,()=>{

    console.log("Server running at : port: 2000:");
})

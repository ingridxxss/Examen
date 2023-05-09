const express = require('express');
app = express()
const port = 2500
const morgan =require('morgan');
const path= require('path')
const bodyParser = require('body-parser')

app.get('/saludo',(req,res =>{
    res.send('hola mundo')
}))


console.log("servidor escuchado en http://:localhost:2500")

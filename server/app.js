const express = require('express');

const app = express();

app.get('/',(req,res) =>{
 
 console.log('Berhasil')

})

app.get('/konsultasi',(req,res) =>{
 
    console.log('Berhasil bang')
   
})
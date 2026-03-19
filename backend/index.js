const express = require('express');

const PORT = 3000;

const app = express();

// Write a function in Node.js that reads a file named "data.txt" and logs its contents to the console

const fs = require('fs');

const printFileData=()=>{
    fs.readFile('./data.txt','utf-8',(err,data) =>{
        if(err) throw err;
        console.log(data)
    })
}

printFileData();


app.listen(PORT,()=>{
    console.log("Runnig on => " + PORT)
})


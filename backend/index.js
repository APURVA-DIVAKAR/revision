const express = require('express');
const axios = require('axios');
const http = require('http');

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

// printFileData();

// 2.  Write a function that creates a new directory named "logs" and logs a message to a file named "info.log" inside the directory

function createDirectory () {
    const myData = "Reading data from info.log file";
    fs.mkdir("./logs",{recursive:true},(err)=>{
        if(err) throw err;
        else{
            fs.writeFile("./logs/info.log",myData,(err)=>{
                if(err) throw err;
            })
        }
    })
}

// createDirectory();

// 3. Write a function that fetches data from an API endpoint using the Axios library and returns the response

async function fecthData () {
    try{
        const res = await axios.get('https://random-data-api.com/api/v2/users')
        return res;
    } catch(err){
        throw err;
    }
}

// fecthData()
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// 4. Write a function in Node.js that uses the native "http" module to create a simple HTTP server that listens on port 3000 and returns a "Hello, world!" message to any incoming request.

http.createServer((req,res)=>{
  res.end('Hello HTTP!!')
}).listen(PORT);

// 5. Write a function in Node.js that accepts a command-line argument and logs it to the console

const getArgs = () =>{
    let arg = process.argv.slice(2);
    console.log(arg);
}

getArgs();
// node index.js hello User



app.listen(PORT,()=>{
    console.log("Runnig on => " + PORT)
})


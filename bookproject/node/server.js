//Backend

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/',(req,res)=>{
    res.end("welcome to root path");
})

app.post('/api',(req,res)=>{
    const feedback = req.body.feedback;
    res.end("Feedback: " + feedback);
})

app.listen(3000,()=>{
    console.log("server is running...");
})

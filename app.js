const express = require('express');
const app = new  express();
const router=require('./src/routes/api');

const rateLimit=require('express-rate-limit');
const helmet = require("helmet");
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({limit:'50mb'}));
// app.use(express.urlencoded({limit:'50mb'}));


const limiter= rateLimit({windowMs:15*60*100,max:3000})
app.use(limiter);

//Database Connection Established
let URL='mongodb+srv://<username>:<password>@cluster0.idcnaio.mongodb.net/ECOMMERCE_PROJECT-1?retryWrites=true&w=majority&appName=Cluster0';
let OPTION={user:"practice1", pass:"RB_Practice1321", autoIndex:true}

mongoose.connect(URL,OPTION).then((res)=>{
    console.log("Database Connection Success...");
}).catch((err)=>{
    console.log(err);
})


// app.set('etag', false);
app.use("/api/v1",router)



// Add React Front End Routing
app.use(express.static('client/dist'));
app.get('*',function (req,res){
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})


module.exports=app;
// const http = require("http");
// const port = 8080;

// const { default: mongoose } = require("mongoose");

// const server = http.createServer((req , res) =>{
//     res.end("backend is Up");
//     console.log("You are the Admin");
// })

// server.listen(port,() =>{
//     console.log("Server is up")
// })

const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
// const User = require("./models/User");
const port = 8800
const server = express();
server.use(express.json());

mongoose.connect("mongodb://localhost:27017/FIT_HUBuser")
.then(
    console.log("Database is connected Successfully")
);

server.get("/",(req,res)=> {
    res.send("Backend is UP");
    console.log(req.headers);
});

server.post("/send",async(req,res)=> {
    const suser = await User.create(req.body);
    res.json(suser)

})
server.post("/signup", async(req, res) => {
    try{
    const {name, email, phone, password} = req.body;
    const userexist = await NewUser.findOne({email});
    if(userexist){
        res.json({message : "User Already Exist"});
    }
    const hashedpass = await bcrypt.hash(password, 12);
    const newuser = await NewUser.create({email, name, password : hashedpass, phone});
    res.json(newuser);
    } catch(err){
        res.json({message : "Signup Failed"});
    }
});

server.post("/signin", async(req, res) => {
    const {email, password} = req.body;
    const matchpass = await bcrypt.compare(password, 10);
})

server.listen(port,()=> {
    console.log(`Server is running at port number ${port}`);
})













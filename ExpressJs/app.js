const express=require("express")
const app=express()

// app.get(route,callback)
app.get("/",(req,res)=>{
    res.send("Hello World From Express.js")
})
app.get("/about",(req,res)=>{
    res.send("about Page ")
})
app.get("/contact",(req,res)=>{
    res.send("Conatact")
})
app.listen(8001,()=>{
    console.log("Listening to the port 8001")
})
// API

// GET-->read
// post-->create
// put-->Update
// delete-->del
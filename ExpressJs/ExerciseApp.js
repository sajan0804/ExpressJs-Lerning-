const express=require("express")
const path=require("path")
const app=express()
// console.log()
const staticPath=path.join(__dirname,"/Website")
//to set the view engine
app.set("view engine","hbs")

app.use(express.static(staticPath))

//template engine route 
app.get("",(req,res)=>{
    res.render("index")
})




// app.get("/",(req,res)=>{
//     // res.send("Welcome to My Home Page !")
//     res.send("Welcome to Home Page")
// })
// app.get("/about",(req,res)=>{
//     res.send("Welcome to About Page ")
// })
// app.get("/contact",(req,res)=>{
//     res.send("Welcome to Contact Page")
// })
// app.get("/temp",(req,res)=>{
//     res.send("Welcome to Temparture Page ")
// })
app.listen(8526,()=>{
    console.log("Listening to the port no 8526")
})
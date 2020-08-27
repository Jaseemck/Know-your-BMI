const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    let weight=Number(req.body.weight);
    let height=Number(req.body.height)/100;
    let bmi=weight/(height*height);
    bmi = bmi.toFixed(2)
    res.send("Your Body Mass Index(BMI) is : "+bmi+" kg/m^2");
})
app.listen(3000, function(req,res){
    console.log("The server is running");
});
const express =require("express");
const app=express();

// writing a get method
app.get('/',function(req,resp){
resp.send("<h1>Atharva's first application using Express js</h1>");
})


//writing app.listen() to check whether the server is connected or not
app.listen(9999);
console.log("server is running on port no 9999"); 
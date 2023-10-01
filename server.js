var express = require('express');

var app = express();

//first o/p display
app.get("/",(req,res)=>
{
  res.send("Welcome to IET");
}
);

//second o/p display using localhost:8000/product
app.get("/product",(req,res)=>
  {
     var p = {
                "id" : 45,
                "title" : "Gerbera",
                "description" : "Wedding flower",
                "Unit price" : 15,
                "quantity" : 5000
             };
  
             res.send(p);
  }
);

//third o/p display linking or add all static html pages
app.use(express.static('public'));


app.listen(8000);
console.log("App is listening on port 8000");

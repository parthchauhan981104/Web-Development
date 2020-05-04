const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

 var items = [];
 var workItems = [];

app.get("/", function(req, res){

  var day = date.getDate();
  res.render ("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

  var item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else{
     items.push(item);
     res.redirect("/");
  }

});

app.get("/work", function(req, res){

  res.render( "list", {listTitle:  "Work List", newListItems: workItems} );

});

app.post("/work", function(req, res){

   workItems.push(req.body.newitem);
   res.redirect("work")

});

app.get("/about", function(req, res){

  res.render( "about" );
});


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});

// 8d5181c4f8a7139bc9bf1b0ba46b20fb-us8

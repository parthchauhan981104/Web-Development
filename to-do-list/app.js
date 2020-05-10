const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
mongoose.connect('mongodb+srv://admin-parth:Test123@cluster0-prmax.mongodb.net/todolistDB', {useNewUrlParser: true, useUnifiedTopology: true});

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified"]
  }
});

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified"]
  },
  items: [itemSchema]
});

const Item = mongoose.model("Item", itemSchema);
const List = mongoose.model("List", listSchema);

const item = new Item({
  name: 'Eat'
});


 var defaultItems = [];
 defaultItems.push(item);

app.get("/", function(req, res){

  Item.find(function(err, founditems){
    if (err){
      console.log(err);
    } else{
      res.render ("list", {listTitle: "Today", newListItems: founditems});
    }
  });

});

app.get("/:customlistname", function(req, res){

  const customListname = _.capitalize(req.params.customlistname);

  List.findOne({name: customListname}, function(err, foundList){
    if (!err){
      if(!foundList){
        //create a new list
        console.log("Doesn't exist");
        const list = new List({
          name: customListname,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + customListname);
      } else{
        //show existing list
        res.render ("list", {listTitle: foundList.name, newListItems: foundList.items});
      }
    }

  });

});

app.post("/", function(req, res){

  var itemName = req.body.newItem;
  var listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Today"){
    item.save();
    res.redirect("/");
  } else{
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    })
  }


});


app.post("/delete", function(req, res){

   const checkedId = req.body.checkbox;
   const listName = req.body.listName;

   if (listName === "Today"){
     Item.deleteOne({_id: checkedId}, function(err){
       if (!err){
         console.log("Item successfully deleted");
         res.redirect("/");
       }
     });
   } else{
     List.updateOne({name: listName}, {$pull: {items: {_id: checkedId}}}, function(err, foundList){
       if(!err){
         res.redirect("/" + listName);
       }
     } )
   }


});

app.get("/about", function(req, res){

  res.render( "about" );
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});

// 8d5181c4f8a7139bc9bf1b0ba46b20fb-us8


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// gets our module 'date.js' from the directory'/date.js'
const date = require(__dirname + "/date.js");

const app = express();


// Items list that we push to
// Items can be pushed to an const array but a const array can not be set = to a new array
const items = ["Brush Teeth", "Feed Cats", "Eat Breakfast"];
const workItems = [];


// Tells app to use ejs
app.set("view engine", "ejs");

// allows use of bodyparser. Has to be after express()
app.use(bodyParser.urlencoded({extended: true}));
// tells express to use the public folder which contains our css
app.use(express.static("public"));


app.get("/", function(req, res){
    
    // calls function 'getDate' from date.js
    let day = date.getDate()

    // uses the 'view engine' to 'render' a page called 'list'
    // 'listTitle represents the key from our list.ejs page
    // 'day' represents the value that we put in our 'key' place.
    res.render("list", {
        listTitle: day,
        newListItems: items});
});

// posts our root('/') page on request. Uses bodyParser to get our newItem
app.post("/", function(req, res) {

    // uses bodyParser to get the new item input from list.ejs
    let item = req.body.newItem;

    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        // pushes item from our text input to our list
        items.push(item);
    
        res.redirect("/");
    };

});





app.get("/work", function(req,res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems});
});

app.get("/about", function(req,res) {
    res.render("about");
});



app.listen(3000, function(){
    console.log("Server started on port 3000")
})
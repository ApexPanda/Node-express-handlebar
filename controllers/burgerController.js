// Dependencies
var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

// Create routes and the logic within the routes

// GET request to grab DB content
router.get("/", function(req, res){
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
    })
});

// POST request to add to DB
router.post('/burgers/add', function(req, res){
    burger.insertOne(req.body.burger_name, function(result){
        res.redirect('/'); 
    });
});

// PUT request to update in DB
router.put('/burgers/update', function(req, res){
    burger.updateOne(req.body.burger_id, function(result){
        console.log(result)
        res.redirect("/");
    });
});

// export routes to server.js
module.exports = router;
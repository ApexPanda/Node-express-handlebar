// Import the Mysql connection 

const connection = require("./connection.js");

// Get data from the database
const orm = {
    selectAll: function(tableInput, cb){
        connection.query('SELECT  FROM' + tableInput + ':', function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        })
    }, 

    insertOne: function(tableInput, val, cb) {
        connection.query('INSERT INTO' + tableInput + "(burger_name) VALUES ('"+val+"');", function(err, result){
            if(err)throw err;
            cb(result);
        })
    }, 

    updateOne: function(tableInput, condition, cb) {
        connection.query('UPDATE' + tableInput + 'SET devoured=true WHERE id='+ (condition), function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
};

//export the orm object to burger.js
module.exports = orm;
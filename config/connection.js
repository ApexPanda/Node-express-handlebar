const mysql = require("mysql");

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    })
};

//Make the connection 

connection.connect(function(err){
    if(err){
        console.error(`Connected as id ${connection.threadId}`);
    }
});

//Exports connection to ORM file
module.exports = connection;
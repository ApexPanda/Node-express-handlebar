// Pulls in the orm file from config
const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        })
    },

    insertOne: function(name,cb) {
        orm.insertOne('burgers', name, cb);
    },
    
    updateOne: function(id, cb) {
        orm.updateOne('burgers', id, cb);
    },
};

// Export to the burgerController.js
module.exports = burger; 
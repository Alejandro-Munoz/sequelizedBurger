var orm = require('../config/orm.js');

var burger = {
    // Find all the burgers.
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    // Insert one burger.
    insertOne: function(col, val, cb){
        orm.insertOne("burgers", col, val , function(res){
            cb(res);
        })
    },
    // Update one burger
    updateOne: function(objColsVals, condition, cb){
        orm.updateOne('burgers', objColsVals, condition, function(res){
            cb(res);
        })
    }    
}

module.exports = burger;
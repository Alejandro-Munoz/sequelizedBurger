const connection = require('./connection.js');

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    selectAll: function(table, cb){
        var queryString = 'SELECT * FROM ?? ';
        
        connection.query(queryString,table,function(err, results){
            // console.log(results);
            cb(results)
        })
    },
    insertOne: function(table, col, val, cb){
        var queryString = 'INSERT INTO ?? (??) Values(?)';

        connection.query(queryString,[table, col, val],
            function(err, results){
            if(err){
                console.log(err);
                throw err;
            }
            // console.log('ok',results);
            cb(results);
        })
    },
    updateOne: function(table, colVals,condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(colVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log('updated',result);
            cb(result);
        });
    }

}
// orm.selectAll('burgers');
// orm.insertOne('burgers', {burger_name:'Blue Cheese Burger', devoured:1});
// orm.updateOne({burger_name:'Bacon burger2'},{id:2})
module.exports = orm;

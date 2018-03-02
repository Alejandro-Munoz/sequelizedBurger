const mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    hots:"127.0.0.1",
    database: "burgers_db",
    user: "root",
    password:""
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + connection.threadId);
});

module.exports = connection;
var mysql = require('mysql');
var connection;

var connection = mysql.createConnection({
  socketPath:"/Applications/MAMP/tmp/mysql/mysql.sock",
  user: 'root',
  password: 'root',
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {throw err;}
  console.log("connect as id" + connection.threadid)

    });

module.exports = connection;
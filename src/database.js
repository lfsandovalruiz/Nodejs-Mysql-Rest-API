const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({ 
  host: "trivia-ocean.mysql.database.azure.com", 
  user: "localhost", 
  password: "&LU11049927iz&", 
  database: "ocean_trivia",
  port: 3306
});

mysqlConnection.connect(function (error) {
  if(error){
    console.log(error);
    return;
  } else {
    console.log("Db is connected");
  }
});

module.exports = mysqlConnection;
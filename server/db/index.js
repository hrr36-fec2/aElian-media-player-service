var mysql = require('mysql');

dbConnection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || '',
  database: process.env.RDS_DB_NAME || 'playlist'
});

dbConnection.connect(function (err) {
  if (err) {
    console.log(err);
  }
});

module.exports.dbConnection = dbConnection;

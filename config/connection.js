let mysql = require('mysql');
const { promisify } = require('util')

let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Saikarthik@1',
  database: 'employeeTracker_DB',
})

connection.connect ((err) => {
    if (err) throw err;
    console.log('connected to the database');
});

module.exports = connection;
module.exports.queryPromise = promisify(connection.query.bind(connection));

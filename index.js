const inquirer = require('console.table');
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    password: "root",
    database: "employeeTracker_db"
});


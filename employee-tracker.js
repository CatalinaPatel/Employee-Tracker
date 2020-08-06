const mysql = require("mysql");
const inquirer = requirer("inquirer");
const consoleTable = require("console.table");
const db = require(".");
const { start } = require("repl");
const { allowedNodeEnvironmentFlags } = require("process");


const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "root",
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    startScreen();
});

function startScreen() {
    inquirer
        .prompt({
            type: "list",
            choices: [
                "Add department",
                "Add role",
                "Add employee",
                "View departments",
                "View roles",
                "View employees",
                "Update employee role",
                "Exit"
            ],
            message: "What would you like to do?",
            name: "option"
        })

        .then(function (result) {
            switch (result.option) {
                case "Add department":
                    addDepartment();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Add employee":
                    addEmployee();
                    break;

                case "View departments":
                    viewDepartment();
                    break;

                case "View roles":
                    viewRoles();
                    break;

                case "View employees":
                    viewEmployees();
                    break;

                case "Update employee role":
                    updateEmployee();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}


function addDepartment() {

    inquirer.prompt({

        type: "input",
        message: "What is the Deaprtment name?",
        name: "depName"

    }).then(function (answer) {

        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName], function (err, res) {
            if (err) throw err;
            console.table(res)
            startScreen()
        });
    });
}

function updateEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Which employee information would you like to update?",
                name: "employeeUpdate"
            },
        ])
}
const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
})

db.connect((err) => {
    if (err) throw err
    startMenu();
})

const startMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'endPoint',
            message: 'What would you like to do?',
            choices: ['View all employyes', 'Add employee', 'Update employee role', 'View all roles', 'Add role', 'Update role', 'View all departments', 'Add department', 'Update department', 'Quit'],
        }
    ])
        .then(data => {
            switch (data.endpoint) {
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add employee':
                    addEmployee();
                    break;
                case 'Update employee role':
                    updateEmployeeRole();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'Add role':
                    addRole();
                    break;
                case 'Update role':
                    updateRole();
                    break;
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'Add department':
                    addDepartment();
                    break;
                case 'Update department':
                    updateDepartment();
                    break;
                case 'Quit':
                    db.end();
                    process.exit(0);
                    break;
            }
        })
}


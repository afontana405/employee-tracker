const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db',
})

db.connect((err) => {
    if (err) throw err
    startMenu();
})

const startMenu = () => {
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'endPoint',
            message: 'What would you like to do?',
            choices: ['View all employees', 'Add employee', 'Update employee role', 'View all roles', 'Add role', 'View all departments', 'Add department', 'Quit'],
        },
    ])
    .then(data => {
        switch (data.endPoint) {
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
            case 'View all departments':
                viewDepartments();
                break;
            case 'Add department':
                addDepartment();
                break;
            case 'Quit':
                db.end();
                process.exit(0);
                break;
        }
    })
}

// viewTable('employees');
// viewTable('roles');
// viewTable('departments');

// function viewTable(tableName) {
//     const sql = 'SELECT * FROM ?';
//     const params = [tableName];
//     db.query(sql, params, (err, res) => {
//         if (err) throw err;
//         console.table(res);
//     })
//     // startMenu();
// }

// viewAllEmployees();
// viewAllRoles();
// viewDepartments();

function viewDepartments() {
    const sql = 'SELECT * FROM departments';
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
    })
}
function viewAllRoles() {
    const sql = 'SELECT * FROM roles';
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
    })
}
function viewAllEmployees() {
    const sql = 'SELECT * FROM employees';
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'firstName',
            message: "What is the new employee's first name?",
        },
        {
            type: 'text',
            name: 'lastName',
            message: "What is the new employee's last name?",
        },
        {
            type: 'text',
            name: 'role',
            message: "What is the new employee's role number?",
        },
        {
            type: 'text',
            name: 'manager',
            message: "What is the new employee's manager number?",
        }
    ])
    .then(data => {
        const sql = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
        db.query(sql, [data.firstName, data.lastName, data.role, data.manager], (req, res) => {
            console.log('employee added!');
            startMenu();
        });
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'newRole',
            message: 'What is the name of the new role?',
        },
        {
            type: 'text',
            name: 'salary',
            message: 'What is the salary of the new role?',
        },
        {
            name: 'text',
            name: 'departmentID',
            message: 'What is the department ID of the new role?',
        }
    ])
    .then(data => {
        const sql = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
        db.query(sql, [data.newRole, data.salary, data.departmentID], (req, res) => {
            console.log('role created!');
            startMenu();
        })
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'department',
            message: 'What is the name of the new department?',
        },
    ])
    .then(data => {
        const sql = 'INSERT INTO departments (name) VALUES (?)';
        db.query(sql, data.department, (req, res) => {
            console.log('role created!');
            startMenu();
        })
    })
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'test',
            name: 'employee',
            message: "What's the id of the employee you want to update?",
        },
        {
            type: 'text',
            name: 'newRole',
            message: "what's the id of the new role for this employee?",
        }
    ])
    .then(data => {
        const sql = 'UPDATE employees SET role_id = ? WHERE ID = ?';
        const params = [data.newRole, data.employee];
        db.query(sql, params, (req, res) => {
            console.log("employee's role updated!");
            startMenu();
        })
    })
}
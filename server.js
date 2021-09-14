const inquirer = require('inquirer');
const mysql = require('mysql2');
const logo = require('asciiart-logo');

//database connection 
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'LetsKickIt1!',
        database: 'employeesystem_db'
    },
    console.log(`Connected to the books_db database.`)
);
// for the art thingy
art();
function art() {
    const logoText = logo({ name: "This is cool" }).render();

    console.log(logoText);

    mainMenu();
}

// prompts users choice
function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'choices',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee',
                    'Quit'
                ],
            },
        ]).then(userChoice => {
            switch (userChoice.choices) {
                case 'View all departments':
                    viewAllDepartment();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee':
                    updateEmployee();
                    break;
                case 'Quit':
                    quit();
                    break;
                default:
                    quit();
            }
        });
}
// all departments
function viewAllDepartment() {

    mainMenu();
}
// all roles 
function viewAllRoles() {

    mainMenu();
}
// all employees 
function viewAllEmployees() {

    mainMenu();
}
// add department 
function addDepartment() {
// needs prompt to make new department and link it to area
    mainMenu();
}
//add role
function addRole() {
// needs prompt to make new department 
    mainMenu();
}
// add employee
function addEmployee() {
// link to add employee
//then to know what role 
// then which department
    mainMenu();
}
//update employee
function updateEmployee() {

    mainMenu();
}
// quit function 
function quit() {
    console.log('Bye!');
}





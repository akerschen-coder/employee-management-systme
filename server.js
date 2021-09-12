const inquirer = require('inquirer');
const logo = require('asciiart-logo');


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

    mainMenu();
}
//add role
function addRole() {

    mainMenu();
}
// add employee
function addEmployee() {

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





const inquirer = require('inquirer');
const logo = require('asciiart-logo');


//art();
function art() {
    // logo will be somehwere here?    
}


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
                //still have to create the default
                default:
                    quit();
            }
        });
} 
// all departments
function viewAllDepartment() {

}
// all roles 
function viewAllRoles() {

} 
// all employees 
function viewAllEmployees() {

}
// add department 
function addDepartment() {

}
//add role
function addRole () {

}
// add employee
function addEmployee () {

}
//update employee
function updateEmployee () {

}
mainMenu();




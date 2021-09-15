const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const db = require('./db/happening');
const { updateE } = require('./db/happening');
require('console.table');

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
    db.findAllDepartment().then(([row]) => {
        console.table(row);
    }).then(() => {
        mainMenu();
    });
}
// all roles 
function viewAllRoles() {
    db.findAllRoles().then(([row]) => {
        console.table(row);
    }).then(() => {
        mainMenu();
    });
}
// all employees 
function viewAllEmployees() {
    db.findAllEmployees().then(([row]) => {

        console.table(row);
    }).then(() => mainMenu());

}
// add department 
function addDepartment() {
    // needs prompt to make new department and link it to area
    inquirer.prompt([{
        name: 'department_name',
        message: 'What is departments name?'
    }]).then((data) => {
        //console.log(data);
        db.createDepartment(data).then(() => {
            mainMenu();
        });
    });
}
//add role
function addRole() {
    inquirer.prompt([
        {
            name: 'title',
            message: 'What is the roles name?'
        },
        {
            name: 'salary',
            message: 'How much will this role make?'
        },
        {
            name: 'deparment_id',
            message: 'Which department does it belong to?'
        },
    ]).then((data) => {
        db.createRole(data).then(() => {
            mainMenu();
        });
    });

}
// add employee
function addEmployee() {
    const roles = db.findAllRoles();
    const roleChoices = roles.map(function (role) {
        return { name: role.title };
    })
    inquirer.prompt([
        // first name 
        {
            name: 'first_name',
            message: 'What is employees first name?'
        },
        //last name 
        {
            name: 'last_name',
            message: 'What is employees last name?'
        },
        //role 
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the role for employees?',
            choices: roleChoices
        }
    ]).then((data) => {
        db.createEmployee(data).then(() => {
            mainMenu();
        });
    });
}

//update employee
function updateEmployee() {
    // choosing which employee
    const employee = db.findAllEmployees();
    const employeeChoices = employee.map((employee) => {
        return `${employee.first_name} ${employee.last_name}`;

    });
    //choosing the role
    const roles = db.findAllRoles();
    const roleChoices = roles.map(function (role) {
        return { name: role.title };
    });
    inquirer.prompt([
        //choosing the employee
        {
            type: 'list',
            name: 'employee.id',
            message: 'Which employee would you like to update?',
            choices: employeeChoices
        },
        //choosing the role
        {
            type: 'list',
            name: 'role_id',
            message: 'Which role to you want to move them to?',
            choices: roleChoices
        }
    ]).then((data)=> {
        db.updateE(data).then(() => {
            mainMenu();
        });
    });
}


// quit function 
function quit() {
    console.log('Bye!');
}





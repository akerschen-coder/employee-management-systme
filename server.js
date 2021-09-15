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
                    updateEmployeeRole();
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
    inquirer.prompt([
        //first name 
        {
            name: 'first_name',
            message: 'What is employees first name?'
        },
        //last name 
        {
            name: 'last_name',
            message: 'What is employees last name?'
        }

    ]).then((data) => {
        const fName = data.first_name;
        const lName = data.last_name;

        db.findAllRoles().then(([row]) => {
            const roles = row;
            const roleChoices = roles.map(({ id, title }) => ({
                name: title,
                value: id
            }));
            inquirer.prompt([
                //role 
                {
                    type: 'list',
                    name: 'role_id',
                    message: 'What is the role for employees?',
                    choices: roleChoices
                }
            ]).then((res) => {
                const roleId = res.role_id;
                db.findAllEmployees().then(([row]) => {
                    const employees = row;
                    const managerChoice = employees.map(({ id, first_name, last_name }) => ({
                        name: `${first_name} ${last_name}`,
                        value: id
                    }));
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'manager_id',
                            message: 'What manager do they work under?',
                            choices: managerChoice
                        }
                    ]).then((res) => {
                        const newEmployee = {
                            manager_id: res.manager_id,
                            role_id: roleId,
                            first_name: fName,
                            last_name: lName
                        };
                        db.createEmployee(newEmployee);
                    }).then(() => mainMenu());

                });
            });
        });
    });
}

//update employee
function updateEmployeeRole() {
    // choosing which employee
    db.findAllEmployees().then(([row]) => {
        const employees = row;
        const employeeChoice = employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
        }));

        inquirer.prompt([
            //choosing the employee
            {
                type: 'list',
                name: 'employeeId',
                message: 'Which employee would you like to update?',
                choices: employeeChoice
            }
        ]).then((data) => {
            const employeeId = data.employeeId;
            db.findAllRoles().then(([row]) => {
                const roles = row;
                const roleChoices = roles.map(({ id, title }) => ({
                    name: title,
                    value: id
                }));
                inquirer.prompt([
                    //role 
                    {
                        type: 'list',
                        name: 'role_id',
                        message: 'What is the employee new role?',
                        choices: roleChoices
                    }
                ]).then((res) => {
                    db.updateE(employeeId, res.role_id);
                }).then(() => mainMenu());
            });
        })
    }
    );
}
// quit function 
function quit() {
    console.log('Bye!');
}





const mysql = require('mysql2');
//database connection 
const connect = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'LetsKickIt1!',
        database: 'employeesystem_db'
    },
    console.log(`Connected to the employeesystem_db database.`)
); 

connect.connect(function (err){
    if (err)throw err;
});

class DB {
    constructor(connect) {
        this.connect = connect;
    }
    // view all departments 
    findAllDepartment() {
         return this.connect.promise().query('SELECT * FROM department');
    } 
    //view all roles 
    findAllRoles() {
        return this.connect.promise().query('SELECT roles.id, roles.title, roles.salary, department.department_name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id');
    }
    //view all employees
    findAllEmployees() {
       return this.connect.promise().query('SELECT employee.id, employee.first_name, employee.last_name, roles.title AS Role, department.department_name AS Department, roles.salary AS Salary, CONCAT(manager.first_name, " ", manager.last_name) AS Manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;');
    }
    //add a department 
    createDepartment(department) {
        return this.connect.promise().query(
            "INSERT INTO department SET ?", department
          );

    }
    //add a role
    createRole() {
        return this.connect.promise().query(
            "INSERT INTO roles (title, salary, department_id) values (?,?,?)", role.title, role.salary, role.department_id
        );
    }
    

    //add an employee
    createEmployee() {
        return this.connect.promise().query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)", employee.first_name, employee.last_name, employee.role_id, employee.manager_id
        );
    }

    //update employee
    updateE() {
        return this.connect.promise().query(
            "INSERT INTO employee SET role_id = ? WHERE id = ?", role_id, employee.id
        );
    }

} 
module.exports = new DB(connect);
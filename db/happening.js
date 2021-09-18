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
    createRole(role) {
        return this.connect.promise().query(
            "INSERT INTO roles SET ?", role
        );
    }
    

    //add an employee
    createEmployee(employee) {
        return this.connect.promise().query(
            "INSERT INTO employee SET ?", employee
        );
    }

    //update employee
    updateE(employee, role) {
        return this.connect.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?", [role, employee]
        );
    }

} 
module.exports = new DB(connect);
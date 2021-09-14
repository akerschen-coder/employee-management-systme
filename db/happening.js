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

class DB {
    constructor(connect) {
        this.connect = connect;
    }
    // view all departments 
    viewAllDepartment(res) {
         return this.connect.query('SELECT * FROM department', function (err, results) {
            res.json(results);
        });
    } 
    //view all roles 
    viewAllRoles() {
        this.connect.query('SELECT * FROM roles', function (err, results) {
            res.json(results);
        });
    }
    //view all employees
    viewAllEmployees() {
        this.connect.query('SELECT * FROM employee', function (err, results) {
            res.json(results);
        });
    }
    //add a department 

    //add a role

    //add an employee

    //update an employee
} 
module.exports = new DB(connect);
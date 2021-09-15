DROP DATABASE IF EXISTS employeesystem_db;
CREATE DATABASE employeesystem_db;

USE employeesystem_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary INT(20),
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) 
  REFERENCES department(id)
); 

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT , 
    FOREIGN KEY (role_id) 
    REFERENCES roles(id) 
);
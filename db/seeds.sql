USE employeesystem_db; 

INSERT INTO department (department_name)
VALUES 
    ('Human Resources'),
    ('Engineering'), 
    ('Finace'),
    ('Legal'),
    ('Sales')

INSERT INTO roles (title, salary, department_id) 
VALUES 
    ('HR Manager', 75000, 1),
    ('HR Representative', 55000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Front End Developer', 100000, 2),
    ('Back End Developer', 100000, 2),
    ('Accounts Manager', 125000, 3),
    ('Accountant', 120000, 3),
    ('Lawyer', 190000, 4),
    ('Legal Team Lead', 250000, 4),
    ('Salesperson', 100000, 5),
    ('Sales Lead', 120000, 5),
    ('Front Desk', 75000, 5),

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
    ('Marcus', 'Smith', 1, NULL), --1
    ('Alice', 'DeBoar', 2, 1),
    ('Sheyla', 'Popavich', 3, NULL),-- 2
    ('Micheal', 'Something', 4, 2),
    ('John', 'Doe', 5, 2),
    ('Theabeenie', 'Bear', 6, 2),
    ('Gracie', 'Scott', 7, NULL), -- 3
    ('Liam', 'Bouje', 8, 3),
    ('Graham', 'Lins', 9, 4),
    ('Peter', 'Barker', 10, NULL), --4
    ('Linda', 'Pokes', 11, 5),
    ('Olivia', 'Rodrie', 12, NULL), --5
    ('Jake', 'Parker', 13, 5) 



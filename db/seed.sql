USE employee_db;

INSERT INTO departments (name)
VALUES ('IT'),
       ('HR'),
       ('Sales'),
       ('Advertising');

INSERT INTO roles (title, salary, department_id)
VALUES ('IT Manager', 40000, 1),
       ('IT Technician', 20000, 1),
       ('HR Manager', 40000, 2),
       ('HR Representative', 20000, 2),
       ('Sales Manager', 40000, 3),
       ('Sales Representative', 20000, 3),
       ('Advertising Manager', 40000, 4),
       ('Advertising Representative', 20000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, NULL),
       ('Betty', 'White', 3, NULL),
       ('Sarah', 'Black', 5, NULL),
       ('Geoff', 'White', 7, NULL),
       ('Alex', 'Sanchez', 2, 1),
       ('Bruce', 'Wayne', 4, 2),
       ('Clark', 'Kent', 6, 3),
       ('Mary', 'Sue', 8, 4);
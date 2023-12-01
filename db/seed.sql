USE employee_db;

INSERT INTO departments (name)
VALUES ('IT'),
       ('HR'),
       ('Sales'),
       ('Advertising'),
       ('Warehouse');

INSERT INTO roles (title, salary, department_id)
VALUES ('IT Manager', 40000, 1),
       ('IT Technician', 20000, 1),
       ('HR Manager', 40000, 2),
       ('HR Representative', 20000, 2),
       ('Sales Manager', 40000, 3),
       ('Sales Representative', 20000, 3),
       ('Advertising Manager', 40000, 4),
       ('Advertising Representative', 20000, 4),
       ('Warehouse Manager', 40000, 5),
       ('Packer', 20000, 5),
       ('Inventory Manager', 40000, 5),
       ('Inventory Specialist', 20000, 5),
       ('Truck Loader', 20000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, NULL),
       ('Betty', 'White', 3, NULL),
       ('Sarah', 'Black', 5, NULL),
       ('Geoff', 'White', 7, NULL),
       ('Barrack', 'Obama', 9, NULL),
       ('John', 'Kennedy', 11, NULL),
       ('Alex', 'Sanchez', 2, 1),
       ('Jason', 'Smith', 2, 1),
       ('Megan', 'Kneifl', 2, 1),
       ('Bruce', 'Wayne', 4, 2),
       ('Clark', 'Kent', 4, 2),
       ('Diane', 'Cummings', 4, 2),
       ('Clark', 'Kent', 6, 3),
       ('Eric', 'Sayer', 6, 3),
       ('Collin', 'Gran', 6, 3),
       ('Mary', 'Sue', 8, 4),
       ('Sam', 'Wessely', 8, 4),
       ('Jessica', 'Gray', 8, 4),
       ('Missy', 'White', 10, 5),
       ('Jeremy', 'Mitchell', 10, 5),
       ('Frank', 'Smite', 12, 6),
       ('David', 'Jones', 12, 6);
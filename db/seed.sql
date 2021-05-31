-- to populate the tables with some data...
USE employeeTracker_DB;
-- For employees table
INSERT INTO employees(first_name, last_name, role_id) VALUES ('John', 'Smith', 1);
INSERT INTO employees(first_name, last_name, role_id) VALUES ('Diana', 'Parkton', 2);
INSERT INTO employees(first_name, last_name, role_id) VALUES ('John', 'Muller', 3);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Mounica', 'Reddy', 4, 1);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Pitt', 'More', 5, 2);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Matt', 'Peter', 6, 3);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Cassandra', 'Regina', 7, 4);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Richard', 'Michael', 8, 5);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Gary', 'Pint', 8, 6);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Jim', 'Rothouska', 9, 7);




INSERT INTO roles (title, salary, department_id) VALUES ('Staffing', 60000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Health and Safety', 70000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Head of HR', 90000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 80000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Accounting Assistant', 45000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Head Accountant', 100000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Sr.Engineer', 80000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Jr. Engineer', 60000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Engineering Intern', 45000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Lead Engineer', 110000, 2);




-- For departments table
INSERT INTO departments (dept_name) VALUES ('Management');
INSERT INTO departments (dept_name) VALUES ('Sales & Service');
INSERT INTO departments (dept_name) VALUES ('Human Resources');
INSERT INTO departments (dept_name) VALUES ('Engineering');
INSERT INTO departments (dept_name) VALUES ('Accounting');
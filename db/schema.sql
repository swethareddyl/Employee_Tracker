DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE employees(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INT NOT NULL,
    manager_id INT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE roles(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL(10) NOT NULL,
	department_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE departments(
	id INT NOT NULL AUTO_INCREMENT,
	dept_name VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);
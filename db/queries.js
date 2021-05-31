
const connection = require('../config/connection')

class DB{
    constructor(connection) {
        this.connection = connection
    }

    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department"
        )
    }
}
const queries = {
    allEmployees:
        `SELECT e.id, e.first_name, e.last_name, title, dept_name AS department, salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM employees e
        INNER JOIN roles
        ON e.role_id = roles.id
        INNER JOIN departments
        ON roles.department_id = departments.id
        LEFT JOIN employees m
        ON e.manager_id = m.id;`,

    allEmployeesByMng: `SELECT e.id, e.first_name, e.last_name, title, dept_name AS department, salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM employees e
        INNER JOIN roles
        ON e.role_id = roles.id
        INNER JOIN departments
        ON roles.department_id = departments.id
        LEFT JOIN employees m
        ON e.manager_id = m.id
        WHERE ?? = ?;`,


    allRoles:
        `SELECT roles.id, title, salary, dept_name AS department
        FROM roles
        INNER JOIN departments
        ON roles.department_id = departments.id;`,

    allDepts:
        `SELECT id, dept_name AS department
        FROM departments;`,

    deleteId:
        `DELETE FROM ??
        WHERE id = ?`,
}

module.exports = queries;
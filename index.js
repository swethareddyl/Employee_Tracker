const inquirer = require('inquirer');
// const questTask= require('./controllers/taskQuestion');

const addEmployee = require('./controllers/addEmployee.js');
const addRole = require('./controllers/addRoles.js');
const addDept = require('./controllers/addDepartment.js');
const updateEmployee = require('./controllers/updateEmployee');
const viewByMng = require('./controllers/viewByMng')
const toDeleteEmployee = require('./controllers/deleteEmployee');
const toDeleteRole = require('./controllers/deleteRole');
const toDeleteDept = require('./controllers/deleteDepartment')

const dal = require('./controllers/dal');
const queries = require('./db/queries.js');


const questTask = [
    {
        type : 'list',
        name : 'task',
        message : 'what would you like to do?',
        choices : [
            new inquirer.Separator('===VIEW INFO==='),
            {
                name : 'view all employees',
                value : 'VIEW_EMPLOYEES',
            },
            {
                name : 'view all employees by department',
                value : 'VIEW_EMPLOYEES_BY_DEPARTMENT',
            },
            {
                name : 'view all employees by manager',
                value : 'VIEW_EMPLOYEES_BY_MANAGER',
            },
            {
                name : 'view all roles',
                value : 'VIEW_ALL_ROLES',
            },
            {
                name : 'view all departments',
                value : 'VIEW_ALL_DEPARTMENTS',
            },
            new inquirer.Separator('=== ADD NEW INFO ==='),
            {
                name : 'add employee',
                value : 'ADD_EMPLOYEE', 
            },
            {
                name : 'add  role',
                value : 'ADD_ROLE',
            },
            
            {
                name : 'add a department',
                value : 'ADD_A_DEPARTMENT',
            },
            
            new inquirer.Separator('=== UPDATE INFO ==='),
            {
                name : 'update employee role',
                value : 'UPDATE_EMPLOYEE',
            },
           
            new inquirer.Separator('=== DELETE INFO ==='), 
            {
                name : 'delete a department',
                value : 'DELETE_A_DEPARTMENT',
            },
            {
                name : 'delete a role',
                value : 'DELETE ROLE',
            },
            {
                name : 'delete employee',
                value : 'DELETE_EMPLOYEE',
            },
           
            new inquirer.Separator('===EXIT==='),
            {
                name : 'quit',
                value : 'QUIT APPLICATION'
            }
           

        ],
        pageSize: 17
    }
];
// Ask the user what taks they'd like to complete. Depending on the task, different functions will
// be called and when task is complete, the askTask function will run again.
const askTask = () => {
    inquirer
        .prompt(questTask)
        .then((answers) => {
            const task = answers.task;
            console.log(task)
             if (task === 'VIEW_EMPLOYEES') {
                dal.viewAll(queries.allEmployees).then((res) => askTask());
            } else if (task === 'VIEW_EMPLOYEES_BY_MANAGER') {
                // console.log('hello'),
                viewByMng()
                .then((answers) => dal.viewAllBy(queries.allEmployeesByMng, 'm.id', answers.managerId))
                .then(() => askTask());
            }else if (task === 'VIEW_ALL_ROLES') {
                dal.viewAll(queries.allRoles)
                .then(() => askTask());
            } else if (task === 'VIEW_ALL_DEPARTMENTS') {
                dal.viewAll(queries.allDepts)
                // console.log()
                .then(() => askTask());
            } else if (task === 'ADD_EMPLOYEE') {
                dal.viewAll(queries.allEmployees)
                addEmployee(askTask);
            } else if (task === 'ADD_ROLE') {
                dal.viewAll(queries.allRoles)
                addRole(askTask);
            } else if (task === 'ADD_DEPARTMENT') {
                dal.viewAll(queries.allDepts)
                addDept(askTask);
            } else if (task === 'UPDATE_EMPLOYEE') {
               updateEmployee().then(()=> askTask());
               
            } else if (task === 'DELETE_EMPLOYEE') {
                toDeleteEmployee()
                .then((answers) => dal.deleteFrom(queries.deleteId, 'employees', Number(answers.empToDelete)))
                .then(() => askTask());
            } else if (task === 'DELETE_ROLE') {
                toDeleteRole()
                .then((answers) => dal.deleteFrom(queries.deleteId, 'roles', Number(answers.roleToDelete)))
                .then(() => askTask());
            } else if (task === 'DELETE_DEPARTMENT') {
                toDeleteDept()
                .then((answers) => dal.deleteFrom(queries.deleteId, 'departments', Number(answers.deptToDelete)))
                .then(() => askTask());
            } else {
                process.exit();
            }
        })
        .catch((err) => console.log(err));
};

askTask();

module.exports = askTask;
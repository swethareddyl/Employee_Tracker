const inquirer = require('inquirer');
const { getAllEmp } = require('./getAll');

// Use inquirer to ask which employee to delete from the the db
const toDeleteEmployee = () => {
    return new Promise ((resolve, reject) => {
        
        getAllEmp()
        .then((allEmployees) =>
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'empToDelete',
                    message: "Which employee would you like to delete?",
                    choices: allEmployees
                },
            ])
        )
        .then((answers) => resolve(answers))
        .catch((err) => reject(err))
    });
};

module.exports = toDeleteEmployee;
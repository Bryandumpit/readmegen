// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.createPromptModule([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (rqeuired)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: gitHubUser => {
                if (gitHubUser) {
                    return true;
                } else {
                    console.log('Please enter your github username!')
                }
            }
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('write to file')
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(writeToFile)
}

// Function call to initialize app
init();

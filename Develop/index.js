// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { rejects } = require('assert');
const { resolve } = require('path');

// TODO: Create an array of questions for user input
const questions = (answers) =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is title of your project? (required)',
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
        {
            type:'input',
            name: 'email',
            message: 'Please enter your e-mail address',
            validate: userEmail => {
                if (userEmail) {
                    return true;
                } else {
                    console.log('Please enter your email address!')
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which open source license is applicable to your application?',
            choices: ['MIT License', 'GNU GPLv3', 'ISC License', 'Apache License 2.0']
        },
    ])
}

const installation = installSteps => {
    if (!installSteps.steps) {
        installSteps.steps=[];
    }

    return inquirer.prompt([
        {
            type:'input',
            name: 'install',
            message: 'Please provide one step for installation (you will be prompted if there are next steps)'
        },
        {
            type: 'confirm',
            name: 'confirmNext',
            message: 'Is there a next step for installation (false if no further steps)',
            default: false
        }
    ])
    .then(installationSteps => {
        installSteps.steps.push(installationSteps);
        if (installationSteps.confirmNext) {
            return installation(installSteps);
        } else {
            return installSteps;
        }
    })
}

const usage = useSteps => {
    if (!useSteps.steps) {
        useSteps.steps=[];
    }
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide one step for usage (you will be prompted if there are next steps)'
        },
        {
            type: 'confirm',
            name: 'confirmNext',
            message: 'Is there a next step for usage (false if no further steps)',
            default: false
        }
    ])
    .then(usageSteps => {
        useSteps.steps.push(usageSteps);
        if (usageSteps.confirmNext) {
            return usage(useSteps);
        } else {
            return useSteps;
        }
    })
}

// TODO: Create a function to write README file
function writeToFile(fileContent) {
    return new Promise((resolve,rejects) => {
        fs.writeFile('./dist/README.md',fileContent, err=>{
            if (err){
                rejects(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
    
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(installation)
        .then(usage)
        .then(answers=>{
            // return console.log(answers)
            return generateMarkdown(answers);
        })
        .then(markdown => {
            return writeToFile(markdown)})
        .then(writeFileResponse=>{
            console.log(writeFileResponse)
        })
        .catch(err=>{
            console.log(err);
        })
}

// Function call to initialize app
init();

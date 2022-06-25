// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = ('generateMarkdown')

// TODO: Create an array of questions for user input
const questions = (data) => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a brief description of your project?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are directions for installation?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are directions for usage?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are directions for contribution?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the name of your github repo?'
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(data) {}

// TODO: Create a function to initialize app
function init() {
    //this is where I will call questions
    questions ();
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
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
    {
        type: 'list',
        name: 'license',
        message: 'Please select the type of license',
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "No License"]
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //path.join gets current working directory and adds "dist".. making a path
    return fs.writeFileSync(path.join(process.cwd(), "/dist", fileName), data)
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions)
    writeToFile("README.md", generateMarkdown(answers))
    console.log("README created!")
}

// Function call to initialize app
init();


// TODO: Include packages needed for this application
const fs = require('fs')
const generateMarkdown = ('generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile(fileName, data, err => {
    if (err) throw (err)
})
// TODO: Create a function to initialize app
function init() {
    //this is where I will call questions
    questions ();
}

// Function call to initialize app
init();

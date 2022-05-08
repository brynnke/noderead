// TODO: Include packages needed for this application
var fs = require('fs');
var inquirer = require('inquirer');
var generateMarkdown = require('./utilis/generatemarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of this project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        }

    },
    {
        type: 'input',
        name: 'discription',
        message: 'Can you discribe your project? (Required)',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message:'What is your GITHUB username? (Required)',
        validate: githubInput => {
            if (githubInput){
                return true;
            } else {
                console.log('Please enter your GITHUB username!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
    .then((answers) => {
       var templateHTML = generateMarkdown(answers)
       writeToFile('REAMDE.md', templateHTML);
        // Use user feedback for... whatever!!

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

// Function call to initialize app
init();



// required packages 
const {writeFile, copyFile} = require('./utilis/generate-site.js');
var fs = require('fs');
var inquirer = require('inquirer');
var generateMarkdown = require('./utilis/generatemarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project? (Required)',
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
        message: 'What is your GITHUB username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GITHUB username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project, what problems will it solve? (Required)',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please put what your project is');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why was this project created? (Required)',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why you created the project');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'how',
        message: 'How will this project be used by the user? (Required)',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please enter project details');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide detailed step by step instructions for the installation for your project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('please enter installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'use',
        message: 'Provide instructions and examples of intened use. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter use instructions!');
            }
        }

    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use for your project?',
        choices: ['apache', 'gpl', 'agpl', 'no licesne']
    },
    {
        type: 'confirm',
        name: 'contribute',
        message: ' Please include guidelines for contributing. (Required)',
        when: ({ confirmContributer }) => {
            if (confirmContributer) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contribuer guidlines.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter test instructions');
                return false;
            }
        }
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
    fs.writeFile('./dist/generated-REAMDE.md', filecontent, err => {
        if (err) {
            reject(err);
            return;
        }


    })
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            var templateHTML = generateMarkdown(answers)
            writeToFile('README.md', templateHTML);
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
init()




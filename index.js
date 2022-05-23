// required packages 
const fs = require('fs');
const inquirer = require('inquirer');

// page link for the README to be developed
const generatePage = require('./utilis/generatemarkdown');

// array questions to answer
const questions = () => {
    //inquirer prompts questions
    return inquirer.prompt([
        {
            type: 'input',
            data: 'github',
            message: 'What is your username on GITHUB?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GITHUB username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            data: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            data: 'email',
            message: 'Please enter email address',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            data: 'description',
            message: 'Please provide a brief description of your project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            data: 'licesne',
            message: 'What license type should your project have?',
            choices: ['GNU', 'MIT'],
            default: ["MIT"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            data: 'use',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your description of use!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            data: 'test',
            message: 'What command is to be run for tests?',
            default: 'npm test' 
        },
        {
            type: 'input',
            data: 'contributors',
            message: 'What doe contributors need to know about adding to the repo?'
        }
    ]);
};
// write readme file using system
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // for error
        if (err) {
            console.log(err);
            return; 
            // README created
        } else {
            console.log("Your README has been created successfully !!!!!!!")
        }
    })
};

// function to initialize 
questions()
// answers
.then(answers => {
    return generatePage(answers);
})
// data to display page
.then(data => {
    return writeFile(data);
})
// errors
.catch(err => {
    console.log(err)
})





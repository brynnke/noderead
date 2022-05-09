
   
// licesne bagdge if licesnse is chosen
const addLicenseBadge = license => {
  if (license) {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else {
    return '',
}
}


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return 'https://choosealicense.com/licenses/';
  } else {
    return '';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return 'https://choosealicense.com/licenses/';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return 'https://choosealicense.com/licenses/';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licenseBadge = ''
  switch(license){
    case 'MIT License':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPLv3':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'ISC license':
      licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  licenseLink = ''
  switch(license){
    case 'MIT License':
      licenseLink = '[MIT License](https://choosealicense.com/licenses/mit/)';
      break;
    case 'GNU GPLv3':
      licenseLink = '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)';
      break;
    case 'ISC license':
      licenseLink = '[ISC License](https://choosealicense.com/licenses/isc/)';
      break;
    case 'Apache License 2.0':
      licenseLink = '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `
## License:
  Please click the link to see details about your license
  ${renderLicenseLink(license)}
`
  } else {
    return ''
  }  
}





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
# ${data.title} 
${renderLicenseBadge(data.license)} 
## Description:
  ${data.description}
## Table of Contents:
  * [Project Title](#${data.title})
  * [Description](##Description)
  * [Installation](##Installation)
  * [Usage](##Usage)
  * [Tests](##Tests)
  * [Contributions andQuestions](##Contributions-and-Questions)
  * [License](##License)
## Installation:
  Please follow the steps below for installation:
  ${JSON.stringify(data.steps)}
## Usage:
  Please follow the steps below for usage:
  ${JSON.stringify(data.steps)}
## Tests:
  If you would like to run tests on the application, please follow the steps below:
  ${JSON.stringify(data.steps)}
## Contributions and Questions:
  If you would like to contribute or if you have any questions please visit my GitHub page or feel free to email me. Please see the links below:
  * [My GitHub](https:github.com/${data.github}/)
  * [e-mail me at ${data.email}](mailto:${data.email})
${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;

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

function renderLicenseInToc(license){
  if (license){
    return`* [License](#license)
    `
  } else {
    return ''
  }
}

const installationHandler = steps => {
  console.log(steps)
  const installationSteps = steps.filter(step => {
    if (step.install) {
      return true;
    } else {
      return false;
    }
  })
  .map(({install})=>{
    return `* ${install}`
  })
return `${installationSteps.join('\n  ')}
`
}

const usageHandler = steps => {
  console.log(steps)
  const usageSteps = steps.filter(step => {
    if (step.usage) {
      return true;
    } else {
      return false;
    }
  })
  .map(({usage})=>{
    return `* ${usage}`
  })
return `${usageSteps.join('\n  ')}
`
}

const testHandler = steps => {
  console.log(steps)
  const testSteps = steps.filter(step => {
    if (step.test) {
      return true;
    } else {
      return false;
    }
  })
  .map(({test})=>{
    return `* ${test}`
  })
return `${testSteps.join('\n  ')}
`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const {steps,...projectInfo} = data
  
  return `
# ${projectInfo.title} 
${renderLicenseBadge(projectInfo.license)} 
## Description:
  ${projectInfo.description}
## Table of Contents:
  * [Project Title](#${projectInfo.title})
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributions and Questions](#contributions-and-questions)
  ${renderLicenseInToc(projectInfo.license)}
## Installation:
  Please follow the steps below for installation:
  ${installationHandler(steps)}
## Usage:
  Please follow the steps below for usage:
  ${usageHandler(steps)}
## Tests:
  If you would like to run tests on the application, please follow the steps below:
  ${testHandler(steps)}
## Contributions and Questions:
  If you would like to contribute or if you have any questions please visit my GitHub page or feel free to email me. Please see the links below:
  * [My GitHub](https:github.com/${projectInfo.github}/)
  * [e-mail me at ${projectInfo.email}](mailto:${projectInfo.email})
${renderLicenseSection(projectInfo.license)}
  `;
}

module.exports = generateMarkdown;

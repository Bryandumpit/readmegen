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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `
  ##License:
  Please click the link to see details about your license
  [licensename](${renderLicenseLink(license)})
  `
  } else {
    return ''
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title} ${renderLicenseBadge(data.license)} 
    ## Description:
      ${data.description}
    ## Table of Contents:
      * insert table of contents, links/bookmarks
    ## Installation:
      ${data.instruction}
    ## Usage:
      ${data.usage}
    
    ${renderLicenseSection(data.license)}

    ## Contribution:

    ## Tests:
    If you would like to run tests on the application, please follow the steps below:
      *$insertsteps

    ## Questions
      If you have any questions, please feel free to contact me at ${data.email}
  `;
}

module.exports = generateMarkdown;

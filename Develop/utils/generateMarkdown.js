// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title} $licenseBadge here
    ## Description:
      ${data.description}
    ## Table of Contents:
      * insert table of contents, links/bookmarks
    ## Installation:
      ${data.instruction}
    ## Usage:
      ${data.usage}
    ifLicense => ## License:
      $insertlicenselink

    ## Contribution:

    ## Tests:
    If you would like to run tests on the application, please follow the steps below:
      *$insertsteps

    ## Questions
      If you have any questions, please feel free to contact me at ${data.email}
  `;
}

module.exports = generateMarkdown;

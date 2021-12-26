// Creates function to generate template README
function ReadMeTemplate(data) {
    return `
<h1 align='center'>${data.projectTitle}</h1>
    
## Description 
      ${data.description}
    
## Table of Contents

    - [Description](#description)

    - [Installation](#installation)

    - [Usage](#usage)

    - [Tests](#Tests)

    - [License](#license)

    - [Features](#features)

    - [Contributing](#contributing)

    - [Questions](#questions)

## Installation
      ${data.installation}
## Usage
      ${data.usage}
    
## Tests
      ${data.Tests}  
## License
      This application is covered by ${data.license} license.
## Features
      ${data.features}
## Contributing
      ${data.contributing}
## Questions
      ${data.questions}
  `;
  }
  
  module.exports = ReadMeTemplate;
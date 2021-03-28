// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const inquirer = require('inquirer');
var fs = require('fs');
const mdFile = 'README.md';

function init () {

  try {
    if (fs.existsSync(mdFile)) {
      //file exists
      console.log(mdFile+" exists - will overwrite");
      fs.unlink(mdFile, (err) => {
        if (err) throw err;
        console.log(mdFile+' was deleted');
      });
    }
  } catch(err) {
    console.error(err)
  }
}

function appendToFile(fileName,whatToAppend) {
  fs.appendFile(fileName, whatToAppend+"\n", function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

init();

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project Title',
      name: 'title',
      validate: function (input) {
        if (input){
          return true  
        } else {
          return 'Project Title can not be null';
        }
      }
    },
    {
      type: 'input',
      message: 'Project Description',
      name: 'description',
      validate: function (input) {
        if (input){
          return true  
        } else {
          return 'Project Description can not be null';
        }
      }
    },
    {
      type: 'input',
      message: 'Installation instructions',
      name: 'installInstructions',
    },
    {
      type: 'input',
      message: 'Usage',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'License',
      name: 'license',
      // https://github.blog/2015-03-09-open-source-license-usage-on-github-com/ lists the most popular licenses used on github
      choices: [
        { name: 'MIT', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
        { name: 'GPLv2', value: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'},
        { name: 'Apache', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
        { name: 'GPLv3', value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
        { name: 'BSD 3-clause', value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
        { name: 'Unlicense', value: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'},
        { name: 'BSD 2-clause', value: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'},
        { name: 'LGPLv3', value: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'},
        { name: 'AGPLv3', value: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'}
      ]
    },
    {
      type: 'input',
      message: 'Contributing',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Test',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Questions',
      name: 'questions',
    },
  ])
  .then((response) => {
    appendToFile(mdFile,`# ${response.title}
## Description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${response.installInstructions}
## Usage
${response.usage}
## License
${response.license}
## Contributing 
${response.contributing}
## Tests 
${response.test}
## Questions
${response.questions}
`
      );
  });

  
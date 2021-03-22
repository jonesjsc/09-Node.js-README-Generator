// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project Title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Project Description',
      name: 'description',
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
      choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'BSD 2-clause', 'LGPLv3', 'AGPLv3'],
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
    console.log(response.title);
    console.log(response.description);
    console.log(response.installInstructions);
    console.log(response.usage);
    console.log(response.license);
    console.log(response.contributing);
    console.log(response.test);
    console.log(response.questions);
  });

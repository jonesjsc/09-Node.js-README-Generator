// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const inquirer = require('inquirer');
var fs = require('fs');
const mdFile = 'SOMETHING.md';

function init () {
// import { unlink } from 'fs';

try {
  if (fs.existsSync(mdFile)) {
    //file exists
    console.log(mdFile+" exists - will overwrite");
  }
} catch(err) {
  console.error(err)
}

fs.unlink(mdFile, (err) => {
  if (err) throw err;
  console.log(mdFile+' was deleted');
});
}

init();


// inquirer
// .prompt([
//   {
//     type: 'checkbox',
//     message: 'Which optional sections do you want to complete',
//     name: 'sections',
//     choices: [
//       // new inquirer.Separator(' == TOP OF README.MD == '),
//       // { name: '[1] Title',   short: '1', value: 'Title', checked: true },
//       // { name: '[2] Description',   short: '2', value: 'Description', checked: true },
//       { name: '[1] Table of Contents', short: '3', value: 'TOC', checked: false },
//       { name: '[2] Installation',  short: '4', value: 'Installation', checked: false },
//       { name: '[3] Usage',  short: '5', value: 'Usage', checked: false },
//       { name: '[4] License',  short: '6', value: 'License', checked: true },
//       { name: '[5] Contributing',  short: '7', value: 'Contributing', checked: false },
//       { name: '[6] Tests',  short: '8', value: 'Tests', checked: false },
//       { name: '[7] Questions',  short: '9', value: 'Questions', checked: false },
//     ]
//   }
// ])
// .then((answers) => {
//   // readmeSectionList = answers;
//   let readmeSectionList = JSON.stringify(answers, null, '  ');
//   readmeSectionList.unshift('Description');
//   readmeSectionList.unshift('Title');
  
//   console.log(readmeSectionList);
// });



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
    console.log(response);
    fs.appendFile(mdFile, `# ${response.title}`, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    renderReadme(1,response.title);
    renderReadme(2,response.description);
    renderReadme(2,response.installInstructions);
    renderReadme(2,response.usage);
    renderReadme('license',response.license);
    renderReadme(2,response.contributing);
    renderReadme(2,response.test);
    renderReadme(2,response.questions);

    // console.log(response.title);
    // console.log(response.description);
    // console.log(response.installInstructions);
    // console.log(response.usage);
    // console.log(response.license);
    // console.log(response.contributing);
    // console.log(response.test);
    // console.log(response.questions);
  });

  function renderReadme (level,text) {
    console.log ("renderReadme called with level "+level);
    console.log ("renderReadme called with text "+text);
  }
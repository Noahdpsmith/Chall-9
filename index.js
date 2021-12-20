// // TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const ReadMeTemplate = require("./src/ReadMeTemplate");
const createFile = util.promisify(fs.writeFile);

// // TODO: Create a function to initialize app
// function init() {}


const promptUser = () => {
  return inquirer.prompt([
      {
          type:'input',
          name:'username',
          message:'Enter GitHub username:'
      },
      {
          type:'input',
          name:'projectTitle',
          message:'What is the project title?'
      },
      {
          type:'input',
          name:'description',
          message:'Describe the project:'
      },
      {
          type:'input',
          name:'installation',
          message:'What are the steps required to install your project?'
      },
      {
          type:'input',
          name:'usage',
          message:'Provide instructions and examples for use. Include screenshots as needed:'
      },
      {
          type:'input',
          name:'Tests',
          message:'Go the extra mile and write tests for your application. Then provide examples on how to run them.:'
      },
      {
          type:'list',
          name:'license',
          message:'Choose the license for this project:',
          choices: ['GNU AGPL', 'GNU LGPL', 'Mozilla', 'Apache','MIT', 'Boost Software','The Unlicense']
      },
      {
          type:'input',
          name:'features',
          message:'List project features/languages:'
      },
      {
          type:'input',
          name:'contributing',
          message:'If you would like others to contribute to your app/package, add guidelines for how to do so. If not, skip or type "N/A":'
      },
      {
        type:'input',
        name:'questions',
        message:'Whats your email?:'
    },
  ])
};
async function init() {
  try {
      const data = await promptUser();
      const createContent = ReadMeTemplate(data);

      await createFile('./sample/README.md', createContent);
      console.log('Successfully created README.md');
  } catch(err) {
      console.log(err);
  }
};
// // Function call to initialize app
init();



// const fs = require('fs');
// const generatePage = require('./src/ReadMeTemplate');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });


console.log(inquirer)


// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };
//   console.log(generatePage('Jane', 'janehub'));

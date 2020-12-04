const fs = require("fs");

// fs.readFile("data.csv", 'utf8', (error, data) => error ? console.error(error) : console.log(data))

// fs.writeFile('log.txt', process.argv[2], (err) => err ? console.error(err) : console.log('Success!'));

const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project?",
  },
  {
    type: "input",
    name: "instructions",
    message: "What are the installation instructions to the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the project used for?",
  },

  {
    type: "input",
    name: "contributions",
    message: "Who are the contributors to the project?",
  },
  {
    type: "input",
    name: "test",
    message: "What is needed to test the project?",
  },
  {
    type: "input",
    name: "license",
    message: "What license was used for the project?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];
// function writeToFile(filename, data) {
//   fs.writeFile("./demo/" + filename, data, function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("YaY" + filename);
//   });
// }

// function init() {
//     inquirer.prompt(questions).then(function(data) {
//         writeToFile("DemonREADMe.md")
//     })
// }
// init()

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, "  "));
});

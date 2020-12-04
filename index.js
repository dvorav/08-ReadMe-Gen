const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    //Questions

    //Title
    {
      type: "input",
      name: "title",
      message: "What is the name of the project?",
    },
    //Description
    {
      type: "input",
      name: "description",
      message: "What is the description of the project?",
    },
    //Input
    {
      type: "input",
      name: "instruction",
      message: "What are the installation instructions to the project?",
    },
    //Usage
    {
      type: "input",
      name: "usage",
      message: "What is the project used for?",
    },
    //Contribution
    {
      type: "input",
      name: "contribution",
      message: "Who are the contributors to the project?",
    },
    //Test
    {
      type: "input",
      name: "test",
      message: "What is needed to test the project?",
    },
    //License
    {
      type: "list",
      name: "license",
      message: "What license was used for the project?",
      choices: [
        'MIT',
        'GPL',
        'BSD']
    },
    //Username
    {
      type: "input",
      name: "username",
      message: "What is your Github username?",
    },
    //Email
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])
  .then(
    ({
      title,
      description,
      instruction,
      usage,
      contribution,
      test,
      license,
      username,
      email,
    }) => {
      //Template for ReadMe file
      const readMeTemplate = `
${title}

# Table of Contents

1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Test](#test)
5. [License](#License)
6. [Questions](#Questions)

## Description
${description}     
## Installation
${instruction}
## Usage
${usage}
## Contributing
${contribution}
## Test
${test}
## License
${license}
## Questions
* Github: https://github.com/${username}
* Email: ${email}`;
      //This function uses FS to create a readme file
      createNewFile(title, readMeTemplate);
    }
  );
//Create ReadMe File, and also names file
function createNewFile(fileName, data) {
  fs.writeFile(`./${fileName}.md`, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully created file!");
    }
  });
};

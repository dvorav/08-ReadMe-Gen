const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
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
      name: "instruction",
      message: "What are the installation instructions to the project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the project used for?",
    },

    {
      type: "input",
      name: "contribution",
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
      const template = `
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
     createNewFile(title,template)
    }
  );
   function createNewFile(fileName, data) {
       fs.writeFile(`./${fileName}.md`,data,(err) => {
           if(err) {
               console.log(err)
           }
           console.log("Successfully created file!")
       })
   }


async function init() {
  try {
    const response = await promptUser();
    const readMe = generateMarkdown(response);
    await writeFileaAsync("readme.md", readMe);
    console.log("Success!");
  } catch (err) {
    console.log(error);
  }
}


const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'contact',
    },
  ])
  .then((response) => {

    fs.appendFile('log.txt', response.languages, (err) =>{});
    fs.appendFile('log.txt', response.name, (err) =>{});
    fs.appendFile('log.txt', response.contact, (err) =>{});

  });

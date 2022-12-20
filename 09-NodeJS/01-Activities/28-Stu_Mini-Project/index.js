const inquirer = require('inquirer')
const fs = require('fs')

const generateHTML = (name, location, bio, gitHubURL, linkedInURL) => {
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1> ${name} </h1>
    <h2> ${location} </h2>
    <p> ${bio} </p>
    <a href=""> ${gitHubURL} </a>
    <a href=""> ${linkedInURL} </a>
    
</body>
</html>`
}

inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name'
    },
    {
        type: 'input',
        name: 'location',
        message: 'What state do you live in?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Tell me about yourself'
    },
    {
        type: 'input',
        name: 'linkedInURL',
        message: 'What is your LinkedIn URL'
    },
    {
        type: 'input',
        name: 'gitHubURL',
        message: 'What is your GitHub URL'
    }
])
.then((response) => {
    const filename = `${response.name.toLowerCase()}.html`;
    fs.appendFile(filename, JSON.stringify(response, null, '\t'), (err) => 
        err ? console.log(err) : console.log('Success!')
    );
  });
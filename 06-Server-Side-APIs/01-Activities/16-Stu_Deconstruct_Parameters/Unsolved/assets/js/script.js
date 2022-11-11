fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)   // ? means you're adding a parameter(s).
    //the first part after the ? is the parameter.
    // the text after the = is the value of what you want.
    // the & just means you're going to add more parameter(s)
    // state=open shows open issues

  
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

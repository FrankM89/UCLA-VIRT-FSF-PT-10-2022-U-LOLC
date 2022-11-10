var requestUrl = "https://api.github.com/orgs/Netflix/repos";

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call

// Makes a GET request to requestUrl and then uses .then to wait for it to be done
// and process that response

$.ajax({
  url: requestUrl,
  method: "GET",
}).then(function (response) {
  console.log("AJAX Response \n-------------");
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call

// Makes a GET request to requestUrl and then uses .then to wait for it to be done
// and process that response

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Fetch Response \n-------------");
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call

// Create a new XMLHttprequest object, then sets the onreadystatechange function
// to add an eventlistener for when the request is done.
// Then opens a connection to the server, and sends the request

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log("XMLHttpRequest Response \n-------------");
    console.log(xhr.response);
  }
};
xhr.open("GET", requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned

// Ajax returns JSON by default whereas in XMLHttpRequestd and fetch you get the
// raw response and have to parse

# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

<!-- The scripts object in a package.json file defines various commands that can be run using npm. Here's a brief explanation of each script:

Start: This script starts the server by running the server.js file using the node command.

Develop: This script is used during development to start both the server and client simultaneously. It uses the concurrently package to run two commands in parallel: npm run watch in the server directory and npm start in the client directory. The watch command is typically used to automatically restart the server when changes are made to the code.

Install: This script installs dependencies for both the server and client by changing directories using cd and running npm i in each directory.

Seed: This script is used to seed the database with initial data. It changes to the server directory and runs the seed script defined in the package.json file located in that directory.

Build: This script is used to build the client-side code for production. It changes to the client directory and runs the build script defined in the package.json file located in that directory. The resulting files are typically placed in a build or public directory that can be served by the server. -->

```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

## Client-side Functionality

* TODO: Explain what this script does in the client-side `client/package.json` file:

```json
"proxy": "http://localhost:3001",
```

## Server-side Functionality

* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

<!--  This code serves static files located in the ../client/build directory using Express's express.static middleware when the Node environment variable NODE_ENV is set to 'production'. -->

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

* TODO: Add a comment describing the functionality of this route in `server/server.js`:

<!--  This code creates a catch-all route that sends the index.html file located in the ../client/build directory as a response to any HTTP GET request made to the server. -->

```js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```

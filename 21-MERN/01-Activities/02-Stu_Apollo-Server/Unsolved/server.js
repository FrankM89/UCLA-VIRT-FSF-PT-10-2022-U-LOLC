const express = require('express');
// TODO: Add a comment describing the functionality of this expression
// Importing Apollo server express
const { ApolloServer } = require('apollo-server-express');

// TODO: Add a comment describing the functionality of this expression
// Importing schemas files for db
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Add a comment describing the functionality of this async function
// This starts the server and applied middleware
// Creates a new instance of an Apollo serer with GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})
};

// TODO: Add a comment describing this functionality
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

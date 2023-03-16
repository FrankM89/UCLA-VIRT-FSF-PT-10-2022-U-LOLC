const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
    // This is an asynchronous function that takes two parameters, parent and args, representing the parent object and arguments for the mutation respectively.
    addUser: async (parent, args) => {
      // This line creates a new user object using the User model and the arguments passed into the mutation.
      const user = await User.create(args);
      // This line generates a token for the newly created user using a signToken function. The signToken function likely creates a 
      // JSON Web Token (JWT) that contains information about the user and can be used to authenticate the user in future requests.
      const token = signToken(user);
      // This line returns an object with two properties, token and user, containing the 
      // JWT and the user object respectively. The client can use the JWT to authenticate the user in subsequent requests.
      return { token, user };
    },
    // TODO: Add comments to each line of code below to describe the functionality below
    // Define a login function that accepts an email and password as arguments
    login: async (parent, { email, password }) => {
      // Search the User collection in the database for a user with the provided email
      const user = await User.findOne({ email });
      // If no user is found with the provided email, throw an AuthenticationError with a message
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // Use the isCorrectPassword method of the user object to check if the provided password matches the user's hashed password in the database
      const correctPw = await user.isCorrectPassword(password);
      // If the provided password does not match the user's hashed password in the database, throw an AuthenticationError with a message
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // If the provided email and password are correct, generate a token using the signToken function and return it along with the user object
      const token = signToken(user);
      return { token, user };
    },
    // Define a function that accepts a thoughtText and thoughtAuthor as arguments and creates a new thought in the database using the Thought model's create method
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });
      // Update the User collection in the database by adding the new thought's id to the thoughts array of the user with the provided username using the findOneAndUpdate method
      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );
        // Return the newly created thought
      return thought;
    },
    // Define a function that accepts a thoughtId, commentText, and commentAuthor 
    // As arguments and adds a new comment to the specified thought in the database using the findOneAndUpdate method
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    // Define a function that accepts a thoughtId as an argument and removes the corresponding thought from the database using the findOneAndDelete method
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    // Define a function that accepts a thoughtId and commentId as arguments and removes 
    // The corresponding comment from the specified thought in the database using the findOneAndUpdate method with the $pull operator
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;

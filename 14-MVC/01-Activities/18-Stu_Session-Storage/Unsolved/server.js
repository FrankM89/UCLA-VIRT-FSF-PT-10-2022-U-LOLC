const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // Allow websites to remember users within a website when they move between web pages
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // Indicates the maximum lifetime of the cookie
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    // Prevent access to cookie values via JavaScript
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    // To prevent cookies from being observed by unauthorized parties due to the transmission of the cookie in clear text
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    // Allows you to declare if your cookie should be restricted to a first-party or same-site context
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});

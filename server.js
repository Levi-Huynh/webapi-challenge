const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const server = express();


const actionRouter = require('./data/helpers/actionRouter.js');
const projectRouter = require('./data/helpers/projectRouter.js');

var userInViews = require('./userInViews.js');
var authRouter = require('./data/helpers/authRouter.js');
var usersRouter = require('./data/helpers/users.js');

var session = require('express-session');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');







var strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL:
        process.env.AUTH0_CALLBACK_URL || 'http://localhost:3500/callback'
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      // profile has all the information from the user
      return done(null, profile);
    }
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  var sess = {
    secret: 'CHANGE THIS TO A RANDOM SECRET',
    cookie: {},
    resave: false,
    saveUninitialized: true
  };
  
  if (server.get('env') === 'production') {
    sess.cookie.secure = true; // serve secure cookies, requires https
  }
  
  
  server.use(express.json());
  server.use(cors());

  passport.use(strategy);
  server.use(session(sess));
server.use(passport.initialize());
  server.use(passport.session());


// ..
server.use(userInViews());
server.use('/', authRouter);
server.use('/', usersRouter);

// config express-session

server.use(express.static(path.join(__dirname, 'reactclient/build')));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/api/action', actionRouter);

server.use('/api/project', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`)
  });
  
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/reactclient/build/index.html'));
  });

  module.exports= server;
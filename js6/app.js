const express = require('express');
const fs = require('fs');
const {ApolloServer, gql} = require('apollo-server-express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded());

const messages = [];
const fRating = {};

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      users: [String]
      messages: [Message]
      files: [File]
    }
    type File {
      name: String
      value: String
    }
    type Message {
      name: String
      value: String
    }
    type Mutation {
      addMessage(value: String): Message
      rateFile(file: String, value: Int): File
    }
  `,
  resolvers: {
    Query: {
      users: () => {
        return new Promise( (r, j) => {
          fs.readdir('/home', (err, users) => {
            r(users);
          });
        });
      },
      messages: () => messages,
      files: (_, args, context) => {
        return new Promise( (s, j) => {
          fs.readdir(__dirname, (err, files) => {
            s(files.map( (f) => {
              const value = +fRating[f] > -1 ? fRating[f] : -1;
              return {
                name: f,
                value,
              };
            }));
          });
        });
      },
    },
    Mutation: {
      addMessage: (_, args, context) => {
        const msg = {name: context.req.cookies.name, value: args.value};
        messages.unshift(msg);
      },
      rateFile: (_, args, context) => {
        fRating[args.file] = args.value;
        return {name: args.file, value: args.value};
      },
    },
  },
  context: ({req}) => ({
    req,
  }),
});
server.applyMiddleware({app});

app.get('/chat', (req, res) => {
  if (!req.cookies.name) return res.redirect('/login.html');
  return res.sendFile(`${__dirname}/views/chat.html`);
});
app.post('/login', (req, res) => {
  res.cookie('name', req.body.name);
  res.redirect('/chat');
});

app.get('/*', (req, res) => {
  return res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(6899); // song.c0d3.com


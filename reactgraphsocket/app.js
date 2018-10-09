const express = require('express');
const fs = require('fs');
const {ApolloServer, gql} = require('apollo-server-express');
const app = express();

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      users: [String]
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
    },
  },
});
server.applyMiddleware({app});

app.use(express.static('public'));

app.listen(6899); // song.c0d3.com


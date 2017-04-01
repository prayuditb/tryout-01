var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    get_image: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  get_image: () => {
    return 'https://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/t/558c019ae4b08aeb04726a36/1435238813669/Ladybug+Saying+Hello%21';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
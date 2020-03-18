const {ApolloServer} = require('apollo-server')
;
const typeDefs = require('./schema');
const server = new ApolloServer({
  typeDefs,
})
;

server.listen(process.env.PORT || 4000).then(({url})=>{
  console.log(`app running at ${url}`);
});

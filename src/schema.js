const {gql} = require('apollo-server')
;
const schema = gql`
    type User{
        name: String!
        email: String!
        id: ID!
        projects: [String]
    }
    type Query{
        user(id: ID!): User
    }
`
;

module.exports = schema
;

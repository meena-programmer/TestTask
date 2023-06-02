import { buildSchema } from "graphql";
var schema = buildSchema(`
type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
  
  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }
  
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    updateUser(id: ID!, name: String, email: String, password: String): User!
    deleteUser(id: ID!): ID!
  }
  
`);

export default schema;

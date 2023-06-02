import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./GraphQL/schema.js";
import resolvers from "./GraphQL/resolver.js";
import cors from "cors";

var app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");

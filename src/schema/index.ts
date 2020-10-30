import { GraphQLSchema } from "graphql";
import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./schema.gql";
import resolvers from "../resolvers/resolverMap";

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers })

export default schema

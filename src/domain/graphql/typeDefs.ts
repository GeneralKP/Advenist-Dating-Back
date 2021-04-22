import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        lastName: String!
        birthDate: String!
        country: ID!
        matches: [ID!]!
        likes: Int!
    }

    type Country {
        id: ID!
        name: String!
    }
    
    type Query {
        users: [User!]!
        countries: [Country!]!
    }

    type Mutation {
        deleteUser(id: ID!): User! 
    }


`;

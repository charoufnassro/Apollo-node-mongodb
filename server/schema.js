
export const typeDefs = gql`
    type Query {
            getUsers: [User]
        }
        type User {
            id: ID!
            userName: String
            email: String
        }
        type Mutation {
            addUser(userName: String!, email: String!): User
        }
`
const express = require("express")
const { ApolloServer, gql, PubSub } = require('apollo-server-express')
require('./configDB')
const {User} = require('./models')

const typeDefs = gql`
    type Query {
            getUsers: [User]
        }
        type User {
            id: ID!
            userName: String
            email: String
            sexe: String
        }
        input userInput {
            userName: String
            email: String
            sexe: String
        }
        type Mutation {
            addUser(userName: String!, email: String!, sexe: String!): User
            deleteUser(id: ID!): User
            updateUser(id: ID!, inputUser: userInput): User
        }
        
`

const resolvers = {
    Query: {
        getUsers: async () => {
            try {
                return await User.find({}).exec();
            } catch(e) {
                return e.message;
            }
        }
    },
    Mutation: {
        addUser: async (_, args) => {
            try {
                console.log("added")
                let response = await User.create(args);
                console.log('args : ', args)
                pubsub.publish(USER_INSERTED, { userInserted: response ,args });
                return response;
            } catch(e) {
                return e.message;
            }
        },
        updateUser: async (_, args) => {
            try {
                let response = await User.findOneAndUpdate(args);
                return response;
            } catch(e) {
                return e.message;
            }
        },
        deleteUser: async (_,user) => {
            try {
                console.log("deleted")
                let response = await User.findByIdAndRemove(user.id);
                return response;
            } catch(e) {
                return e.message;
            }
        },
        updateUser: async (_, {id,inputUser}) => {
            try {
                
                let _id= id
                let _inputUser={userName: inputUser.userName, email: inputUser.email, sexe: inputUser.sexe}
                console.log("update", _id)
                let response = await User.findOneAndUpdate({_id}, _inputUser, { new: true});
                return response;
            } catch(e) {
                return e.message;
            }
            // (root, {
            //     _id,
            //     input
            // }) {
            //     return await Product.findOneAndUpdate({
            //         _id
            //     }, input, {
            //         new: true
            //     })
        }
        
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, connection }) => {
        if (connection) {
          // check connection for metadata
          return connection.context;
        } else {
          // check from req
          const token = req.headers.authorization || "";
    
          return { token };
        }
      },
})

const app = express()
server.applyMiddleware({app})

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
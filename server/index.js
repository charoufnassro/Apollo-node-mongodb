const express = require("express")
const { ApolloServer, gql, PubSub } = require('apollo-server-express')
require('./configDB')
const {User} = require('./models')

const USER_INSERTED = 'userInserted'
const USER_DELETED = 'userDeleted'
const pubsub = new PubSub()

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
        type Mutation {
            addUser(userName: String!, email: String!, sexe: String!): User
            updateUser(id: ID!, userName: String!, email: String!, sexe: String!): User
            deleteUser(id: ID!): User
        }
        type Subscription {
            userInserted: User
            userDeleted: User
        }
`

const resolvers = {
    Query: {
        getUsers: async () => await User.find({}).exec()
    },
    Mutation: {
        addUser: async (_, args) => {
            try {
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
        deleteUser: async (root, {id}) => {
            try {
                let response = await User.findByIdAndRemove(id)
                pubsub.publish(USER_DELETED, { userDeleted: response ,id });
                // second method
                // let response = await User.findById(id, (err, doc)=>{
                //     console.log(doc.userName)
                //     doc.remove()
                //     doc.save()
                // })
                return response;
            } catch(e) {
                return e.message;
            }
        }
    },
    Subscription: {
        userInserted: {
            subscribe: ()=>pubsub.asyncIterator(USER_INSERTED),
        },
        userDeleted: {
            subscribe: ()=>pubsub.asyncIterator(USER_DELETED),
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
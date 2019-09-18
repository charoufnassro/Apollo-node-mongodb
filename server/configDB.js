const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb+srv://charoufnassro:N19930121@usermanager-cg1jd.mongodb.net/graphqldb?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`))

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb://localhost:27017/graphqldb'

mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`))

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

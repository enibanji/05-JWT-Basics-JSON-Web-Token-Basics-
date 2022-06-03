require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const routes = require('./routes/main')
const auth = require('./middleware/auth')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notfoundMiddleware = require('./middleware/not-found')


app.use(express.static('./public'))
app.use(express.json())

app.use(routes)





app.use(errorHandlerMiddleware)
app.use(notfoundMiddleware)

port = process.env.PORT || 3000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()

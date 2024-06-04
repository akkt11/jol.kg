const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
const path = require('path')

// process.env.PORT
// process.env.NODE_ENV => production or undefined

if (process.env.NODE_ENV === 'production') {
    //server static content
    //npm run build
    app.use(express.static(path.join(__dirname, "client/build")))
}

// middleware
app.use(cors())
app.use(express.json()) // req.body

// registration and login routes
app.use('/auth', require('./routes/jwtAuth'))
app.use('/test', require('./routes/Test'))

app.listen(PORT, (error) => {
    console.log(`Server is working on ${PORT}!`)
    if (error) {
        console.log(error.message)
    }
})
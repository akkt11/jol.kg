const express = require('express')
const app = express()
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json()) // req.body

// registration and login routes
app.use('/auth', require('./routes/jwtAuth'))
app.use('/test', require('./routes/Test'))

app.listen(5000, (error) => {
    console.log('Server is working!')
    if (error) {
        console.log(error.message)
    }
})
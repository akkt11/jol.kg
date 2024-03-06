// we created this middleware for checking if the token is valid or not

const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
    try {
        const jwtToken = req.header('token') // take the token out from header

        if (!jwtToken) {
            return res.status(403).json('Not Authorize!') // check if there's token 
        }

            const payload = jwt.verify(jwtToken, process.env.jwtSecret) // verify if this token is valid

            req.user = payload.user // then put the verified token in our payload

            next()
        } catch (error) {
        console.log(error.message)
        res.status(500).json('Server Error!')
    }
}
const db = require('../db')
const bcrypt = require('bcrypt')
const jwtGenerator = require('../utils/jwtGenerator')
const validinfo = require('../middleware/validinfo')
const authorization = require('../middleware/authorization')

const router = require('express').Router()

// registration

router.post('/register', validinfo, async (req, res) => {
    try {

        // 1. destructure the req.body

        const { name, email, password } = req.body

        // 2. check if the user exist (if it does exist throw error)

        const user = await db.query('SELECT * FROM users WHERE user_email = $1', [email])

        if (user.rows.length !== 0) {
            return res.status(401).json('User is already exist!')
        }

        // 3. bcrypt the user's password

        const saltRound = 10

        const salt = await bcrypt.genSalt(saltRound)

        const bcryptPassword = await bcrypt.hash(password, salt)

        // 4. enter the new user in our database 

        const newUser = await db.query('INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, bcryptPassword])

        // 5. generating jwt token

        const token = jwtGenerator(newUser.rows[0].user_id)

        return res.json({ token })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Server Error!')
    }
})

// login

router.post('/login', validinfo, async (req, res) => {
    try {

        // 1. destructure the req.body

        const { email, password } = req.body

        // 2. check if the user doesn't exist (if it doesn't throw error)

        const user = await db.query('SELECT * FROM users WHERE user_email = $1', [email])

        if (user.rows.length === 0) {
            return res.status(401).json('Password or Email is incorrect!')
        }

        // 3. check if the incoming password is the same the database password

        const validPassword = await bcrypt.compare(password, user.rows[0].user_password) // true or false

        if (!validPassword) {
            return res.status(401).json('Password or Email is incorrect!')
        }

        // 4. give them the jwt token

        const token = jwtGenerator(user.rows[0].user_id)

        return res.json({ token })


    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Server Error!')
    }
})

// validation

router.get('/validation', authorization, (req, res) => {
    try {
        return res.json(true)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Server Error!')
    }
})

module.exports = router
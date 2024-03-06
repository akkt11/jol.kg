const db = require('../db')
const authorization = require('../middleware/authorization')
const router = require('express').Router()

// create a test

router.post('/tests', authorization, async(req, res) => {
    try {
        const createTest = await db.query('INSERT INTO tests (user_id) VALUES ($1) RETURNING *',
        [req.user])
        res.json(createTest.rows)
    } catch (error) {
        console.log(error.message);
    }
})

// get a test

router.get('/tests', authorization, async(req, res) => {
    try {
        const getResults = await db.query('SELECT MAX(test_id) FROM tests WHERE user_id = $1',
        [req.user])
        res.json(getResults.rows)
    } catch (error) {
        console.log(error.message)
    }
})


// create results

router.post('/results', authorization, async (req, res) => {
    try {
        const { test_id, results } = req.body
        const createResults = await db.query('INSERT INTO results (test_id, user_id, results) VALUES ($1, $2, $3) RETURNING *',
            [test_id, req.user, results])
        res.json(createResults.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// get results

router.get('/results', authorization, async(req, res) => {
    try {
        const getResults = await db.query('SELECT * FROM results WHERE user_id = $1',
        [req.user])
        res.json(getResults.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// delete result

router.delete('/results/:id', authorization, async(req, res) => {
    try {
        const { id } = req.params 
        const deleteResult = await db.query('DELETE FROM results WHERE result_id = $1', 
        [id])
        res.json('Result was deleted!')
    } catch(error) {
        console.log(error.message)
    }
})

// create an image

router.post('/images', authorization, async (req, res) => {
    try {
        const { test_id, base64 } = req.body
        const createImage = await db.query('INSERT INTO images (test_id, user_id, base64) VALUES ($1, $2, $3) RETURNING *',
            [test_id, req.user, base64])
        res.json(createImage.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// get images

router.get('/images/:test_id', authorization, async(req, res) => {
    try {
        const { test_id } = req.params
        const getImages = await db.query('SELECT * FROM images WHERE user_id = $1 AND test_id = $2',
        [req.user, test_id])
        res.json(getImages.rows)
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router
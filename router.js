const express = require('express')
const router = express.Router()

router.use((req,res,next) => {
    console.log(`Request IP : ${req.ip}`)
    console.log(`Request Method: ${req.method}`)
    console.log('Time', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

router.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname})
})

router.get('/contact', (req, res) => {
    res.sendFile('contact.html', {root: __dirname})
})

module.exports = router;
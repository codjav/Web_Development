const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

// const birds = require('./birds')

// app.use('/birds', birds)


app.use((req, res, next) => {
    console.log('m1')
    console.log(`${Date.now()} is a ${req.method}`)
    fs.appendFileSync("javed.txt", `${Date.now()} is a ${req.method} \n`)
    // res.send('ka ho raha tha bhai')
    next()
})

app.use((req, res, next) => {
    console.log('m2')
    req.harry="I am harry bhai 2";
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!'+ req.harry)
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})


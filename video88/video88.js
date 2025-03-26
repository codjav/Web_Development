const express = require('express')
const app = express()
const port = 3000

app.use(express.static('pet'))

// app.get('/',(req, res)=>{
//     res.send('Hello Javed!')
// })

// app.get('/about',(req,res)=>{
//     res.send('About us')
// })

// app.get('/contact',(req,res)=>{
//     res.send('Hello contact us now')
// })

// app.get('/blog',(req,res)=>{
//     res.send('Hello this is our blog')
// })

// app.get('/blog/javascript',(req,res)=>{
//     res.send('This is my blog about javascript')
// })

// app.get('/blog/python',(req,res)=>{
//     res.send('This is my blog about python')
// })

// app.get('/blog/java',(req,res)=>{
//     res.send('This is my blog about java.')
// }) 

// app.get('/blog/cpp',(req,res)=>{
//     res.send('This is my blog about cpp')
// })

// app.get('/:slug',(req,res)=>{
//     console.log(req.query)
//     res.send(`this is a blog page about ${req.params.slug}`)
// })

app.listen(port, () => {
    console.log(
        // `Example app listening on port ${port}`
        "javed")
})
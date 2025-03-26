const express = require('express')
const app = express()
const port = 3000

// app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.send('Hello Woorld')
})

app.get('/api',(req,res)=>{
    res.json({a:1,b:2,c:8,name:"javed, 134"}) 
})

app.post('/',(req,res)=>{
    console.log("Hey its a post request")
    res.send('Hello world post!')
})
 
// app.put('/',(req,res)=>{
//     console.log("Hey its a put request")
//     res.send('Hello world put!')
// })

// app.delete('/',(req,res)=>{
//     console.log("Hey its a delete request")
//     res.send('Hello world delete!')
// })

// app.get("/index", (req,res)=>{
//     console.log("Hey its index!")
//     res.sendFile('templates/index.html', {root:__dirname})
// })

app.listen(port,()=>{
    console.log(`Your app listening on ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    let siteName= "Adidas"
    let searchText = "Search Now"
    res.render("index", {siteName:siteName, searchText:searchText})
})

// app.get('/blog/:slug', (req,res)=>{
//     let blogTile = "Adidas why and when"
//     let blogContent="Its a very good brand"
//     res.render("templates/blogpost.html", {blogTitle: blogTitle, blogContent:blogContent})
// }) 

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`)
})


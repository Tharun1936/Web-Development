const express = require('express')
const app = express()
const port = 1000
const fs = require("fs")


// logger application 
app.use(express.static("public"))
app.use((req, res, next)=> {
  fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
  // res.send("Hacked by Middlewire 1 !!")
  next()
})
app.use((req,res,next)=> {
  console.log('Middleware2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Here you are in about section!!')
})

app.get('/contact', (req, res) => {
  res.send('You are in contact section!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

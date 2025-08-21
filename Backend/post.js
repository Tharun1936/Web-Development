const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
  res.send('Hey its index')
  console.log("Its index bro..!")
})

app.post('/', (req, res) => {
    console.log("Heyy its a post req")
  res.send('Hello World .. Post req')
})

app.put('/', (req, res) => {
    console.log("Heyy its a put req")
  res.send('Hello World .. put req')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
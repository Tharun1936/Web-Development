const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
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
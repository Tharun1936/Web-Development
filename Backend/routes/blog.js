const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/blogpsot/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})
module.exports = router

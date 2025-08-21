const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Tharun Gowda')
})

app.get('/about', (req, res) => {
  res.send('About Tharun')
})

app.get('/contact', (req, res) => {
  res.send('contact Tharun Gowda')
})

app.get('/blog', (req, res) => {
  res.send('blog about Tharun Gowda')
})

app.listen(port,()=>{
    console.log(`sever is running at http://localhost:${port}`);
});

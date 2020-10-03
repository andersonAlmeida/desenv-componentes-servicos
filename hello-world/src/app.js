const express = require('express')
const app = express()
const port = 3001

app.get('/hello-world', (req, res, next) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

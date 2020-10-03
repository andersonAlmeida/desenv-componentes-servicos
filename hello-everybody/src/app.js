const express = require('express')
const app = express()
const port = 3002

app.get('/hello-everybody', (req, res, next) => {
  res.send('Hello everybody!')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

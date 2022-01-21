//require the express package
const express = require('express')
const port = 4000
//create an app using the express
// package
const app = express()

app.use('/', express.static('public'))
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  
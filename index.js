const express = require('express') // import express
const app = express() // create or initialise express app
const port = 3000 // set port

//using the get method to get the data from the url
//i am trying to get the data from the url
app.get('/', (req, res) => {
  res.send('{"name":"John" , "age":30, "city":"New York"}')
})

//start our app
//listen to the port
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
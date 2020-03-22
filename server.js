const express = require('express')
const path = require('path')
const app = express()

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello world!</h1>')
//   res.sendFile(path.resolve(__dirname, 'public/index.html'))
// })

//in heroku, it will look for PORT file, otherwise use 7000 locally
const PORT = process.env.PORT || 7000

//instead of writing every single path, can serve a folder, everything in the public folder will be served
app.use('/', express.static('public'))

app.get('*', (req, res) => {
  res.status(400).json({ message: 'page does not exist' });
})

app.listen(PORT, () => {
  console.log('listening on port 7000')
})
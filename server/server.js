const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

app.use(express.json());
app.use(cors())

ITEM = []

app.get('/', (req, res) => {
  res.send('Hello World')
  res.status(200).json(req.body)
})

app.post('/item/', (req, res) => {
  
  res.status(201).json(req.body)  
  ITEM.push(req.body)
})

app.get('/items/', (req, res) => {
  res.status(200).json(ITEM)
})


app.delete('/item/:id', (req,res) => {
    
  const id = parseFloat(req.params.id)
  ITEM = [...ITEM.filter((item)=>item.id != id)]
  res.status(204).json({})

  console.log("delete", ITEM)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})
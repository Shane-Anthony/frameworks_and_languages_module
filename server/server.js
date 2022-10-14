const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

app.use(express.json());
app.use(cors())

ITEM = []

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/item/', (req, res) => {
    ITEM.push(req.body)
    res.status(201).json(req.body)
    console.log("post",ITEM)
})

app.get('/item/', (req, res) => {
    res.send(ITEM)
    res.json(ITEM)
    res.status(200).json(ITEM)
    console.log("get")
})

app.delete('/item/:id', (req,res) => {
    const id = parseFloat(req.params.id)
    ITEM = [...ITEM.filter((item)=>item.id != id)]
    console.log("delete", ITEM)
    res.status(204).json({})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})
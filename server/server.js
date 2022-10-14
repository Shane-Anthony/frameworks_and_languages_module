const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

ITEM = []

app.get('/', (req, res) => {
  res.send('<html><body>Your HTML text</body></html>')
})

app.post('/item/', (req, res) => {
    ITEM.push(req.body)
    res.status(201).json(req.body)
    console.log("post",ITEM)
})

app.get('/item/', (req, res) => {
    res.json(ITEM)
    res.status(200).json(req.body)
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
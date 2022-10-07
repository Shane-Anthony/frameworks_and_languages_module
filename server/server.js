const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

ITEM = []

app.get('/', (req, res) => {
  res.send('<html><body>Your HTML text</body></html>')
})

app.post('/item', (req, res) => {
    ITEM.push(req.body)
    res.status(201).json(req.body)
})

app.get('/item', (req, res) => {
    res.json(ITEM)
})

app.delete('/item/:id', (req,res) => {
    ITEM = ITEM.filter(o => o.id !==parseFloat(req.params.id))
    res.status(204).json()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})
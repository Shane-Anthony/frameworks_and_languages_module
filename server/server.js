// Importing Essentials
const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

app.use(express.json());
app.use(cors())

let ITEM = {
  1: {
    "id": 1,
    "user_id": "user1",
    "keywords": ["hammer", "nails", "tools"],
    "description": "A hammer and nails set",
    "image": "https://www.placekitten.com/200/100",
    "lat": 1.10,
    "lon": 1.20,
    "date_from": "2022-11-22T08:22:39.067408",
    "date_to": "2022-11-22T08:22:39.067408"
  },
  2: {
    "id":2,
    "user_id": "user2",
    "keywords": ["hammer", "nails", "tools"],
    "description": "A hammer and nails set",
    "image": "https://www.placekitten.com/200/100",
    "lat": 1.10,
    "lon": 1.20,
    "date_from": "2022-11-22T08:22:39.067408",
    "date_to": "2022-11-22T08:22:39.067408"
}}

//Routing ↓

// GET

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/items/', (req, res) => {
  
})

app.get('/item/:id', (req, res) => {
  
})

// POST

app.post('/item/', (req, res) => {
  if (!req.body.user_id||!req.body.keywords||!req.body.description||!req.body.lat||!req.body.lon) {
    res.status(405).json({
      "message": "All fields are required"
    })
  }
  else { 
    ITEM[newId] = {
      id: newId,
      user_id: req.body.user_id,
      keywords: req.body.keywords,
      description: req.body.description,
      lat: req.body.lat,
      lon: req.body.lon,
      date_from: new Date().toISOString().slice(0,10),
      date_to: new Date().toISOString().slice(0,10)
    }

    let itemId = req.body.id
    let newId = itemId.length > 0 ? Math.max.apply(Math, itemID) + 1 : 1;

    ITEM.push(newId)
    res.status(201).json(newID)  
  }
  
})

// DELETE

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
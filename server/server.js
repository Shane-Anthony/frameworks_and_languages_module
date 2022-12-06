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
  res.status(200).send('<html><body>Hello World</body></html>')

})

app.get('/items/', (req, res) => {
  if( req.query.user_id)
  {
    res.status(200).json(Object.values(ITEM).filter(o  => o.user_id == req.query.user_id))
    res.send(ITEM)
    return;
  }
  res.status(200).json(Object.values(ITEM))
})

app.get('/item/:id', (req,res) => {
  if(ITEM[req.params.id] === undefined)
  {
    res.status(404).json("Item does not exist")
  }
  else
  {
    res.status(200).json(ITEM[req.params.id])
  }
})

// POST

app.post('/item', (req, res) => {

  req.body.id=newId;
  var newId=  Math.max( ...Object.keys(ITEM)) +1;

  ITEM[newId] = {
    id: newId,
    user_id: req.body.user_id,
    keywords: req.body.keywords,
    description: req.body.description,
    image: req.body.image,
    lat: req.body.lat,
    lon: req.body.lon,
    date_from: new Date().toISOString().slice(0,10),
    date_to: new Date().toISOString().slice(0,10)
  }

  if (!req.user_id && !req.body.keywords && !req.body.description && !req.body.lat && !req.body.lon )
  {
    return res.status(405).send("Some fields may be empty.")
  }
  else {
    res.status(201).json(ITEM[newId])
  }

})

// DELETE

app.delete('/item/:id', (req,res) => {
  if (Object.keys(ITEM).includes(req.params.id))
  {
    delete(ITEM[req.params.id]);
    res.status(204).send("This item no longer exists.");
  } 
  else 
  {
    res.status(404).send("Item not found.");
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})
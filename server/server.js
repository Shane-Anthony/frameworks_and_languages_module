// Importing Essentials
const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const path = require('path')

app.use(express.json());
app.use(cors())

let item = {}

//Routing ↓

// GET

app.get('/', (req, res) => {
  return res.status(200).send('<html><body>Hello World</body></html>')
})

app.get('/items/', (req, res) => {
  if( req.query.user_id)
  {
    res.status(200).json(Object.values(item).filter(o  => o.user_id == req.query.user_id))
    return;
  }
  res.status(200).json(Object.values(item))
})

app.get('/item/:id', (req,res) => {
  if(Object.keys(item).includes(req.params.id))
  {
    res.status(200).json(item[req.params.id])
  }
  else
  {
    res.status(404).send("Item does not exist")
  }
})

// POST

app.post('/item', (req, res) => { // https://www.tutorialspoint.com/expressjs/expressjs_restful_apis.htm

  req.body.id=newId;
  var newId=  Math.max( ...Object.keys(item)) +1;
  if (newId == -Infinity){
    newId = 0
  }
  
  item[newId] = {
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
    res.status(201).json(item[newId])
  }

})

// DELETE

app.delete('/item/:id', (req,res) => {
  if (Object.keys(item).includes(req.params.id))
  {
    delete(item[req.params.id]);
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
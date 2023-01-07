Technical Report
================

(intro)


Server Framework Features
-------------------------

### **Routing**

Routing is the method used to map the URL Path to either a function or some logic. When a request has been received, the server then matches the request to its specified route and sends the correct response back.

```js
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
```

Express.js provides a convenient and minimalistic routing feature that requires little code to implement as opposed to other frameworks such as Django. This is ideal so that the server code is easier to maintain because the routing and logic can be kept in one file which is suitable for smaller applications such as this one.

https://expressjs.com/en/guide/routing.html  
https://kinsta.com/knowledgebase/what-is-express-js/


### **Middleware**

Middleware within Express.js are functions that are called to handle the request after being sent to the server and before the response is sent to the client.  Middleware is typically bound to a route handler, i.e. ```app.get()```. It is then executed when the request receives an HTTP request.
```js
app.get('/items/', (req, res) => {
  if( req.query.user_id)
  {
    res.status(200).json(Object.values(item).filter(o  => o.user_id == req.query.user_id))
    return;
  }
  res.status(200).json(Object.values(item))
})
```
This function allows us to perform various tasks, such as returning with the correct response (as seen above). There are various types of middleware that can be utilized; Application level to Third Party and Error Handling are amongst them. A series of these functions can be run together. 

https://expressjs.com/en/guide/using-middleware.html  

https://reflectoring.io/express-middleware/



### **Templates**

Template engines allow us to use static files within our applications. When run the engine replaces variables with the proper values and turns the template into a working HTML file ready to be sent to the client. Some of the popular template engines to be used with express are Mustache, Pug, and EJS.  Below is an example of a Pug in use. 
```js
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

```
Once the engine has been set as above, a call can be made to render the HTML. Then a template file eg. ‘index.pug’ needs to include the following type of content.
```
html
  head
    title= title
  body
    h1= message
```
Template engines allow us to create HTML pages quickly and is much less complex than manually designing them.   

https://expressjs.com/en/guide/using-template-engines.html  

https://www.javatpoint.com/expressjs-template  

https://www.geeksforgeeks.org/how-to-do-templating-using-expressjs-in-node-js/  


Server Language Features
-----------------------

### **Arrow Functions**

Arrow functions are a lightweight alternative to traditional anonymous function expressions, allowing us to create functions in a much tidier format.
```js
app.post('/item', (req, res) => {}
```
This looks much better than regular function expressions:
```js
app.get('/item', function(req, res){}
```
Arrow functions are suitable for simple tasks, and make code look a lot cleaner and condensed.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions  

https://www.w3schools.com/js/js_arrow_function.asp


### **Const**

Both ‘Const’ and ‘Let’ are highly regarded within JavaScript. Both have overtaken ‘Var’ the once favoured statement. Variables declared using ‘Const’ stay the same within their scope, also known as block scoped. They cannot be re-declared or reassigned.
```js
const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
```
The benefit of this is that variables cannot be accidentally overwritten. Handy when declaring objects such as in the above snippet.


https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/


Client Framework Features
-------------------------

### **Data Binding**

One-way data binding means that the variable is solely bound to the DOM, two-way means that it is bound both too and from the DOM. Vue provides two-way data binding in a lot less lines of code than alternative frameworks. The ```v-model``` directive provides this link.
```html
<input v-model="item.user_id" id= "UserID" name="user_id" type="text" placeholder="Enter User ID">
```
Using the ```v-model``` directive here automatically binds the input within the textbox to the ```user_id``` variable. This removes the issue of needing to manually use an event handler to listen for changes within the textbox.

https://vuejs.org/guide/essentials/forms.html  

https://www.javatpoint.com/vue-js-data-binding

### **Event Handling**

To build a dynamic website, listening for different events is crucial, this is called event handling. This can be done two ways using Vue’s native directive ```v-on```  or ```@``` for short, to listen for DOM events; Inline Handlers, or  Method Handlers.
```js
<button @click="delete_item(item.id)" data-action="delete" class="btn_color">Delete</button>
```
The inline handler seen above is good for simple cases.
```js
delete_item(id){ // Delete items using 'DELETE'
  fetch(`${urlAPI}/item/${id}`,{
    method: 'DELETE',
  })

  .then (json => console.log('delete_item()', json))
  .then (this.get_items)
  .catch(err=>console.error(err));
}
```
```html
<button @click="delete_item(item.id)" data-action="delete" class="btn_color">Delete</button>
```
Method handlers point to a defined method when called. 

https://vuejs.org/guide/essentials/event-handling.html  

https://v1.vuejs.org/guide/events.html


### **Interpolation**

Interpolation is the process of inserting something of a different type into something else. Vue uses Interpolation to insert Text, Raw HTML, Attributes or JavaScript Expressions into HTML code. The most used method of this is the ‘Mustache’ syntax ```{{ }}```.
```html
<li v-for="item in items">
  <div class="row">
    <div class="card border-light mb-9"> <!---https://getbootstrap.com/docs/4.0/components/card/-->
      <img :src="item.image" class="card-img-top" alt="card image cap"/>
      <div class="card-body">
        <h5 class="card-title">User ID:  {{item.user_id}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Description:  {{item.description}}</h6>
        <p class="card-text" data-field="id">ID:  {{item.id}}</p>
        <p class="card-text">Latitude:  {{item.lat}}</p>
        <p class="card-text">Longitude:  {{item.lon}}</p>
        <p class="card-text">Keywords:  {{item.keywords}}</p>
        <button @click="delete_item(item.id)" data-action="delete" class="btn_color">Delete</button>
      </div>
    </div>
  </div>
</li>
```
Above we can identify that using Interpolation in this way has synchronized the variables within 'item' and 'items'.  

https://dev.to/eligarlo/vuejs-interpolations-f3  
https://vuejs.org/guide/essentials/template-syntax.html  
https://v1.vuejs.org/guide/syntax.html


Client Language Features
------------------------

### **This**

When called the value of ```this``` keyword is dependent on how it appears, whether that be in a function, class or global. In an object method it is referring to the object, when alone it is referring to the global object and in a function it also refers to the global object.

```js
clear_item() { //clear form
  this.item = {...this.item, ...{
                        
    user_id: '',
    keywords: '',
    description: '',
    image: '',
    lat: '',
    lon: '',
  }}
}
```
Using ```this``` enables features to be shared across objects. Being so dynamic is important if using a feature called prototypical inheritance, enabling classes and constructor functions to work as intended. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#description  

https://www.w3schools.com/js/js_this.asp  

https://dev.to/reedbarger/why-we-need-this-in-javascript-and-how-to-know-it-s-value-1595

### **Asynchronous Processing**

The ability to begin a long running task while still be responsive to other calls and events without waiting for the current task to finish, is the technique called asynchronous processing. The ```then``` keyword can be used to schedule callback functions. It returns a new ```promise``` object.

```js
create_item() { //Add new item to items using 'POST'               
  fetch(`${urlAPI}/item`, {

    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(this.item),
  })
  .then(response => response.json())
  .then(json => console.log('create_item()', json))
  .then(this.clear_item)
  .then(this.get_items)
  .catch(err => console.error(err));
},
```

This technique is a much better alternative in most applications to synchronous processing.  
https://www.freecodecamp.org/news/asynchronous-javascript-explained/  

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing


Critique of Server/Client prototype
---------------------

### Response Codes

```py
RESPONSE_CODES = {
    200: 'OK',
    201: 'Created',
    204: 'No Content',
    301: 'Moved Permanently',
    304: 'Not Modified',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    500: 'Internal Server Error',
    501: 'Not Implemented',
}
```

This list of response codes is only 12 out of the 16 status codes that are recommended in the [RFC1945 (the HTTP 1.0 specification)](https://www.rfc-editor.org/rfc/rfc1945#section-9). This could be detrimental to the servers performance if it receives a HTTP response code it is not familiar with. 
Some more codes that could be utilized are:  
*	100 Continue  
*	206 Partial Content  
*	408 Request Timeout  
*	502 Bad Gateway  
*	599 Network connect timeout error 




### While True 

```python
while True:
  s.listen()
  try:
    conn, addr = s.accept()
  except KeyboardInterrupt as ex:
    break
```
Using ```while True:``` creates an infinite loop, that will continue running until the user forcefully stops the process. Forcefully stopping (killing) programs this way can cause issues with data.


Future Technology Suggestions
-----------------------------

### (name of technology/feature 1)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 2)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 3)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)

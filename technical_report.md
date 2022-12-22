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

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Critique of Server/Client prototype
---------------------

### Rendering - Client

```javascript
function render_items(params) {
		fetch(`${urlAPI}/items?${new URLSearchParams(params).toString()}`)
			.then(response => response.json())
			.then(renderItems)
		.catch(err => console.error(err));
	}
```

(Explain why this pattern is problematic - 40ish words 1 mark)

### CORS 

```python
RESPONSE_DEFAULTS = {
    'code': 200, 
    'body': '',
    'Content-type': 'text/html; charset=utf-8',
    'Server': 'CustomHTTP/0.0 Python/3.9.0+',
    'Access-Control-Allow-Origin': '*',
}
```
(Explain why this pattern is problematic - 40ish words 1 mark)


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

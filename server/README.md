Server
======

To run the server within its container we must use the terminal to input the following commands:

First make sure we are in the correct directory
```
cd server
```
Then we can run the server using the built container
```
make build
```
```
make run
```

To run the server outside of its Container we input:
```
node server
```
Running the server alone prevents us from being able to interact with the client. So in order to test how the server works we must use Curl Commands.

Curl Commands
=====

```
curl -v -X POST http://localhost:8000/item -H "Content-Type: application/json" -d '{"user_id": "user1234", "keywords": ["hammer", "nails", "tools"], "description": "A hammer and nails set. In canterbury", "lat": 51.2798438, "lon": 1.0830275}'

curl -v http://localhost:8000/item/1

curl -v http://localhost:8000/items?user_id=user1234

curl -v -X DELETE http://localhost:8000/item/1
```
Server Testing
=====

The server can be tested by running the commands-
```
make test_server
```
 and to test the server against the example client-
 ```
make test_example_client_with_your_server
 ```

 To View the working app
=====

When the Client and Server are both running use this link to view the finished product:

https://8001-shaneanthon-frameworksa-36wyeq7vfvz.ws-eu78.gitpod.io/?api=https://8000-shaneanthon-frameworksa-36wyeq7vfvz.ws-eu78.gitpod.io

 
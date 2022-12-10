Client
======

To run the client alone we need to use the terminal to input the following commands:    

To make sure we are in the correct directory
```
cd client
```

Then to run the client using the built container.

```
make build
```
```
make run
```

Client Testing
===========

To test the Client, we need to run the cypress test with the example server. To run this the following command needs to be performed:

```
make test_your_client_with_example_server
```

Alternatively testing the client can be done with -
```
make test_client
```
Once these have been run, reports & screenshots shall be available to view in the 'Test_Client' directory.



# Back-end

## How to use this API
To run locally: use `npm start` 

The deployed API can be found here: [Gigapet API](https://gigapets-pt-bw.herokuapp.com/)

### Endpoints
To register a new user: `/api/register`
The request body requires a username and password: 
```
{
  username: 'bob', 
  password: 'pass123'
}
```


To login an existing user: `/api/login`
The request body requires a username and password:
```
{
  username: 'bob', 
  password: 'pass123'
}
``` 


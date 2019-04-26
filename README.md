# Back-end

## How to use this API
To run locally: use `npm start` 

The deployed API can be found here: [Gigapet API](https://gigapets-pt-bw.herokuapp.com/)

### Endpoints


#### Register a new user
`POST` to `/api/register`
The request body requires a username and password: 
```
{
  username: 'bob', 
  password: 'pass123'
}
```
The response will return the user's id and generate a token


#### Login using an existing user
`POST` to `/api/login`
The request body requires a username and password:
```
{
  username: 'bob', 
  password: 'pass123'
}
``` 
The response will return the user's id and generate a token


#### View parent information
`GET` to `/api/parents/:id`


#### Add a new child 
`POST` to `/api/parents/:id/children`
The request body requires a name and parentId:
{
    "name": "jacob",
    "parentId": 16
}
The response will return the child's id, name, and parentId.
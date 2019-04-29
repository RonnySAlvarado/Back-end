# Back-end

## How to use this API
To run locally: use `npm start` or `yarn start`
Server will run on port 5000

NOT YET WORKING - The deployed API can be found here: [Gigapet API](https://gigapets-pt-bw.herokuapp.com/)

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
```
{
  "name": "Jacob",
  "parentId": 16,
  "gigapetName": "Dino Doug"
}
```
The response will return the child's id, name, and parentId.

### Add a new food
`POST` to `/api/foods`
The request body requires a name and numerical value on a scale of `-5` to `5`. 
A `5` represents a very healthy food item and `-5` represents more of a treat.
Response will return the new food id.
```
{
    "name": "apple",
    "value": 5
}
```

### Get the full list of available foods
`GET` to `/api/foods`

### Add a food entry
`POST` to `/api/foodentries`
The request body requires a childId, foodId, and entry date. The date is not auto completed to allow flexibility for users to edit past food entries.
Response will return the food entry id.
```
{
  "childId": 1,
  "foodId": 1,
	"date": "04-27-2019"
}
```

### Get a full list of a child's food entries
`GET` to `/api/foodentries/:id`
The id needed for this endpoint will be the child's id.
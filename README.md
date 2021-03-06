# Back-end

## How to use this API
To run locally: use `npm start` or `yarn start`
Server will run on port 5000

The deployed API can be found here: [Gigapet API](https://gigapets-pt-bw.herokuapp.com/)

### Endpoints


#### Register a new user
`POST` to `/api/register`
The request body requires a username and password: 
```
{
  "username": "bob", 
  "password": "pass123"
}
```
The response will return the user's id and generate a token

#### Login using an existing user
`POST` to `/api/login`
The request body requires a username and password:
```
{
  "username": "bob", 
  "password": "pass123"
}
``` 
The response will return the user's id and generate a token

#### View parent information
`GET` to `/api/parents/:id`

#### View all of parent's children
`GET` to `/api/parents/:id/children`

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

#### Add a new food
`POST` to `/api/foods`
The request body requires a name and numerical value on a scale of `-5` to `5`. 
A `5` represents a very healthy food item and `-5` represents more of a treat.
Response will return the new food id.
```
{
    "name": "apple",
    "value": 5,
    "categoryId": 1
}
```

#### Get the full list of available foods
`GET` to `/api/foods`

#### Add a food entry
`POST` to `/api/foodentries`
The request body requires a childId, foodId, and entry date. The date is not auto completed to allow flexibility for users to edit past food entries.
Response will return the food entry id.
```
{
  "childId": 1,
  "foodId": 1,
	"date": "2019-04-24"
}
```

#### Get a full list of a child's food entries
`GET` to `/api/children/:id/entries`
The id needed for this endpoint will be the child's id.

#### Edit food entry
`PUT` to `/api/foodentries/:id`
The id needed for this endpoint will be the food entry id. 
Request body will require the following: 
```
{
  "id": 1,
  "date": "2019-05-01",
  "childId": 3,
  "foodId": 1
}
```
Response will return the edited entry object:
```
{
  "edited": {
    "id": 1,
    "date": "2019-05-01T00:00:00.000Z",
    "childId": 3,
    "foodId": 2
  }
}
```

#### Delete food entry
`DELETE` to `/api/foodentries/:id`
The id needed for this endpoint will be the entry id.

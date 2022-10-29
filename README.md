# Blog Web App

An anonymous blog web app where users are given a username upon logging in, this user token is saved in local storage so it will persist unless the user manually logs out.

## Project Structure

### Backend (server)

```
src
├── controllers         # functions to connect routes to db operations
├── db                  # db connection and model definitions
├── public              # html/js/css files for static part of site
└── routes              # express middlewares (route wise)
```

### Frontend (client side code)

```
src/public
├── app                                     # frontend js code
│  
├── components                              # html snippets
│   
├── css                                     # contains css libraries used
│   
├── fonts                                   # fonts that are used
│   
├── index.html                              # first / home page
└── js                                      # js libraries being used
```

## API Documentation 

`users`

```
1. `POST /users` 

Creates a new user with random username and an user id

2. `GET /users/{userid}`

Get a user with a given user id

```

`posts`

```
1. `GET /posts` 

Get all posts by everyone

2. `GET /posts/:id`

Gets the post by user id 

3. `POST /posts` 

Create a new post. 
Required fields - 
    userId=
    title=
    body=
```

## Screenshots

![Homepage](./screenshots/Screenshot%20(17).png)
![My Posts Interface](./screenshots/Screenshot%20(15).png)
![Create Post Interface](./screenshots/Screenshot%20(16).png)
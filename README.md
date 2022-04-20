This is a mini microservice project in which user can post and comments. There are two separate microservice for ` Posts ` and ` Comments `

## Getting Started

First, install all the necessary npm packages

- `/client` - ``` npm install ```
- `/event-bus` - ``` npm install ```
- `/query` - ``` npm install ```
- `/microservice/posts` - ``` npm install ```
- `/microservice/comments` - ``` npm install ```

Now, open terminals for each and run the development server:

``` npm run dev ```

- `/client` - ``` npm run dev ```
- `/event-bus` - ``` npm run dev ```
- `/query` - ``` npm run dev ```
- `/microservice/posts` - ``` npm run dev ```
- `/microservice/comments` - ``` npm run dev ```

## Ports

- ` Client ` - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 
- ` Posts ` - Port:4000 [http://localhost:4000](http://localhost:4000)
- ` Comments ` - Port:4001 [http://localhost:4001](http://localhost:4001)
- ` Query ` - Port:4002 [http://localhost:4002](http://localhost:4002)
- ` Event Bus ` - Port:4005 [http://localhost:4005](http://localhost:4005)

## Directory Info

```bash
-> Client - Reactjs frontend App
-> Posts - Microservice for posts
-> Comments - Microservice for comments
-> Event Bus - Kind of Middleware between posts and Query
-> Query
```

## Postman Json

Download ` blog_microservice.postman_collection.json ` and import in ` Postman ` to get all the API collections. 
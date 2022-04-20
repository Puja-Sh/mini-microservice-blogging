const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto')
const axios = require('axios');

const port = 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/posts', async (req, res) => {
    const postId = randomBytes(4).toString('hex');
    const { title } = req.body;
    const url = "http://localhost:"

    posts[postId] = {
        postId, title
    }

    await axios.post(`${url}4005/events`, {
        type: 'PostCreated',
        data: {
            postId, title
        }
    } )

    res.status(201).send(posts[postId]);
})

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
    res.send({});
})

app.listen(port, () =>{
    console.log('Listening on '+ port)
})
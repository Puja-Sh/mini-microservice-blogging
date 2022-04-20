const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');

const port = 4001;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res)=>{
    const postId = req.params.id;

    res.send(commentsByPostId[postId] || []);
})

app.post('/posts/:id/comments', async (req, res) =>{
    const commentId = randomBytes(4).toString('hex');
    const postId = req.params.id;
    const { content } = req.body;
    const url = "http://localhost:"

    const comments = commentsByPostId[postId] || [];  // comments will be an array of comments

    comments.push({commentId, content});

    commentsByPostId[postId] = comments;

    await axios.post(`${url}4005/events`, {
        type: 'CommentCreated',
        data: {
            commentId, content, postId
        }
    } )

    res.status(201).send(comments);
})

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
    res.send({});
})

app.listen(port, () => {
    console.log('Listening to '+ port);
})

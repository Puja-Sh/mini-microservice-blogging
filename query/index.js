const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 4002;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
// posts will look like this ->
// posts = {
//     'postId' : {
//         postId: 'postId',
//         title: 'post title',
//         comments: {
//             commentId: 'commentId',
//             content: 'content'
//         }
//     }
// }

app.get('/posts', (req,res) => {
    res.send(posts);
})

app.post('/events', (req, res) => {
    const {type, data} = req.body;

    if(type === 'PostCreated') {
        const {postId, title} = data;

        posts[postId] = {
            postId,
            title,
            comments: []
        }

    } else if(type === 'CommentCreated'){
        const {commentId, content, postId} = data;

        const post = posts[postId];

        post.comments.push({commentId, content});
    }

    res.send({});
})


app.listen(port, () => {
    console.log('Listening query at port '+ port);
})
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const port = 4005;

app.post('/events', (req, res) => {
    const event = req.body;
    const url = 'http://localhost:';

    axios.post(`${url}4000/events`, event);   // posts
    axios.post(`${url}4001/events`, event);   // comments
    axios.post(`${url}4002/events`, event);   // query service

    res.send({status: 'OK'});
})




app.listen(port, () => {
    console.log('Listening event bus at port '+ port);
})
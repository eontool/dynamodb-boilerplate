"use strict";
console.log("starting server...");
const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require('aws-sdk');
let app = Express();
let route = Express.Router();
AWS.config.loadFromPath('./config.json');
let s3 = new AWS.S3();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', route);
app.listen(3000, () => {
    console.log("Server ready at:", 3000);
});
route.get('/', (req, res) => {
    res.send('Hello!');
});
// Call S3 to list current buckets
s3.listBuckets(function (err, data) {
    if (err) {
        console.log("Error", err);
    }
    else {
        console.log("Bucket List", data.Buckets);
    }
});
route.get('/bucket/all', (req, res) => {
    s3.listBuckets().promise().then((data) => {
        res.send(data.Buckets);
    }).catch((error) => {
        res.send(error);
    });
});
route.delete('/bucket/:name', (req, res) => {
    s3.deleteBucket({ Bucket: req.params.name }).promise().then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send(error);
    });
});

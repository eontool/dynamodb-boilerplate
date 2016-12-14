"use strict";
console.log("starting server...");
const Express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
let app = Express();
let route = Express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', route);
app.listen(3000, () => {
    console.log("App ready at:", 3000);
});
route.get('/', (req, res) => {
    res.send('Hello!');
});

console.log("starting server...");
import * as Express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as AWS from 'aws-sdk';

let app: Express.Express = Express();
let route: Express.Router = Express.Router();



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
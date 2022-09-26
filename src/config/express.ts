import express from 'express';
import bodyParser from 'body-parser';
import routes from '../routes/index';

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// route access for employee crud
app.use(`/employee`,routes.emplROute);

// create re-access token after expire
app.use(`/token`,routes.tokRoute);

export default app;
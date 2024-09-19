import express from 'express';
import cors from 'cors';
import routes from './startup/routes.js';
import sequelizeInstance from './startup/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

sequelizeInstance;

app.use(cors({
    origin: '*'
}));

routes(app);

const port = 8080;

app.listen(port, () =>
    console.log(`Acesse: http://localhost:${port}/`)
);
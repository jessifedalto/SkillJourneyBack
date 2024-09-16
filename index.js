import express from 'express';
import cors from 'cors';
import initializeDatabase from './startup/db.js';
import routes from './startup/routes.js';

const app = express();

initializeDatabase();

app.use(cors({
    origin: '*'
}));

routes(app);

const port = 8080;

app.listen(port, () =>
    console.log(`Acesse: http://localhost:${port}/`)
);
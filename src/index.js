import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser'
import fs from 'fs';

/**
 * for MongoDb import from mongodb.js.
 * for SQL import from sequelizeConfig.js
 */
import Sequelize from '../config/sequelizeConfig';
import { AuthRouter } from './module';
import { errorRoute } from './common/errorHandler';

const app = express();

//db connections
Sequelize.initializeDatabaseConnection();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// create log file
app.use(morgan('common', {
    stream: fs.createWriteStream('./logger.log', {flags: 'a'})
}));
app.use(morgan('dev'));

//Routes
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/', [AuthRouter]);

//Route Error
app.use('/',errorRoute);

//server initialization
app.listen(3000, () => console.log('Example app listening on port 3000!'))
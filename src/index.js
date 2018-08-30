import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser'

import dbConfig from '../config/db';
import { AuthRouter } from './module';

const app = express();

//db connections
dbConfig();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Routes
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/', [AuthRouter])

//server initialization
app.listen(3000, () => console.log('Example app listening on port 3000!'))
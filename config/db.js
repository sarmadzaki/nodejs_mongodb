import mongoose from 'mongoose';
require("dotenv").config();
const username = 
process.env.DB_DEV_USERNAME, 
password = process.env.DB_DEV_PASSWORD,
host = process.env.DB_DEV_HOST;

let url = `mongodb://${username}:${password}${host}`;

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(url,{useNewUrlParser: true});
  mongoose.set('debug', true);
  mongoose.connection
    .once('open', () => console.log('mongodb run'))
    .on('err', err => console.error('error', err));
};
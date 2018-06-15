//Modules
import { allRoutes } from './routes';


var express = require('express');
var bodyParser = require('body-parser');
const program = require('commander');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
const myConfig = require('../myConfig');


//Database connection
const db = mysql.createConnection({
  host: myConfig.host,
  user: myConfig.user,
  password: myConfig.password,
  database: myConfig.database
});

db.connect();


var app = express();

//Config
app.set("port", myConfig.serverPort || 8080);
app.set('superSecret', myConfig.secret);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
 
app.use(function (req: any, res: any, next: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var routes = express.Router();

//aggiunga prefisso alle successive API
app.use('/api', routes);

for (const route of allRoutes) {
  route(app,db,jwt,routes);
}

// Start
export const server = app.listen(app.get('port'), () => {
    console.log(('  App is running at http://localhost:%d in %s mode \nPress CTRL-C to stop\n'), app.get('port'), app.get('env'));
});

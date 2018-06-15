"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
var routes_1 = require("./routes");
var express = require('express');
var bodyParser = require('body-parser');
var program = require('commander');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var myConfig = require('../myConfig');
//Database connection
var db = mysql.createConnection({
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
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var routes = express.Router();
//aggiunga prefisso alle successive API
app.use('/api', routes);
for (var _i = 0, allRoutes_1 = routes_1.allRoutes; _i < allRoutes_1.length; _i++) {
    var route = allRoutes_1[_i];
    route(app, db, jwt, routes);
}
// Start
exports.server = app.listen(app.get('port'), function () {
    console.log(('  App is running at http://localhost:%d in %s mode \nPress CTRL-C to stop\n'), app.get('port'), app.get('env'));
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = function (app, db, jwt, routes) {
    //Verifica Token
    routes.use(function (req, res, next) {
        //console.log(req.headers)
        //console.log(req.body.token)
        //console.log(req.query.token)
        if (req.method === 'OPTIONS') {
            res.status(200).end();
        }
        else {
            var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
            if (token) { //token 
                jwt.verify(token, app.get('superSecret'), function (err, decoded) {
                    if (err) {
                        return res.json({
                            success: false,
                            message: 'Failed to authenticate token.'
                        });
                    }
                    else {
                        req.decoded = decoded;
                        next();
                    }
                });
            }
            else {
                //nessun token
                return res.status(403).send({
                    success: false,
                    message: 'No token provided.'
                });
            }
        }
    });
};

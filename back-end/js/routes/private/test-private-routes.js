"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testPrivateRoute = function (app, db, jwt, routes) {
    routes.get("/test", function (req, res) {
        res.send({
            "status": 200,
            "error": null,
            "response": "Authentication Done!"
        });
    });
};

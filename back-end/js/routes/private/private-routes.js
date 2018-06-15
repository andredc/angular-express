"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRoute = function (app, db, jwt, routes) {
    //API Con autenticazione
    routes.get("/test", function (req, res) {
        res.send({
            "status": 200,
            "error": null,
            "response": "Authentication Done!"
        });
    });
};

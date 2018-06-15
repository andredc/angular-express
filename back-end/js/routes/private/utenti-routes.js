"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//EndPoints relativo alla gestione della tabella utenti del database.
exports.utentiRoute = function (app, db, jwt, routes) {
    //API per la lettura della Lista Dipendenti
    routes.get("/dipendenti", function (req, res) {
        db.query("SELECT * from utenti", function (error, results, fields) {
            console.log("call api /dipendenti");
            if (error)
                throw error;
            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessun Dipendente'
                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Dipendenti',
                    dipendenti: results
                });
            }
        });
    });
    //API per la lettura dei dati del singolo utente
    routes.get("/dipendenti/:id", function (req, res) {
        db.query("SELECT * from utenti where ID =" + req.params.id, function (error, results, fields) {
            console.log("call api /dipendenti/" + req.params.id);
            if (error)
                throw error;
            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'ID errato'
                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Dipendente ' + req.params.id,
                    dipendente: results
                });
            }
        });
    });
    //API per l'aggiornamento dei dati del singolo utente
    routes.put("/dipendenti/:id", function (req, res) {
        console.log("call api /dipendenti/" + req.params.id);
        //console.log(req)
        var userData = {
            "username": req.body.username,
            "password": req.body.password,
            "nome": req.body.nome,
            "cognome": req.body.cognome,
            "email": req.body.email,
        };
        db.query("UPDATE utenti SET username = '" +
            userData.username + "', password = '" + userData.password + "', nome = '" + userData.nome +
            "', cognome = '" + userData.cognome + "', email = '" + userData.email + "' where ID = " + req.params.id, function (error, results, fields) {
            if (error)
                throw error;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    });
};

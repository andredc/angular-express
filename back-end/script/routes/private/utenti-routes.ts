import { Express } from "express-serve-static-core";
import { Request, Response, NextFunction } from "express";

//EndPoints relativo alla gestione della tabella utenti del database.
export const utentiRoute = function (app: Express, db: any, jwt: any, routes: any) {

    //API per la lettura della Lista Dipendenti
    routes.get("/dipendenti", function (req: any, res: any) {
        db.query("SELECT * from utenti", function (error: any, results: any, fields: any) {
            console.log("call api /dipendenti")
            if (error) throw error;

            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessun Dipendente'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Dipendenti',
                    dipendenti: results
                });
            }
        });
    });

    //API per la lettura dei dati del singolo utente
    routes.get("/dipendenti/:id", function (req: any, res: any) {
        db.query("SELECT * from utenti where ID =" + req.params.id, function (error: any, results: any, fields: any) {
            console.log("call api /dipendenti/" + req.params.id)
            if (error) throw error;

            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'ID errato'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Dipendente ' + req.params.id,
                    dipendente: results
                });
            }
        });
    });

    //API per l'aggiornamento dei dati del singolo utente
    routes.put("/dipendenti/:id", function (req: any, res: any) {
        console.log("call api /dipendenti/" + req.params.id)
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
            "', cognome = '" + userData.cognome + "', email = '" + userData.email + "' where ID = " + req.params.id, function (error: any, results: any, fields: any) {
                if (error) throw error;
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            });

    });


}





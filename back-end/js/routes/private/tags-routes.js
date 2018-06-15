"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//EndPoints relativo alla gestione dei Tag
exports.tagsRoute = function (app, db, jwt, routes) {
    //API per la lettura dei tag di un dipendente
    routes.get("/dipendenti/:id/tags", function (req, res) {
        db.query('select td.ID as ID, t.nome , td.ID_dipendente as ID_dipendente  from tags as t,' +
            'tagsdipendenti as td where td.ID_dipendente = ' + req.params.id + ' && td.ID_tag = t.ID', function (error, results) {
            if (error)
                throw error;
            console.log(results);
            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessun Tags'
                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Tags',
                    tags: results
                });
            }
        });
    });
    //API per l'aggiunta di un tag ad un dipendente
    routes.post("/dipendenti/:id/tags", function (req, res) {
        console.log("call API /dipendenti/" + req.params.id + "/tags");
        console.log(req.body);
        db.query("Insert tags SET nome = '" + req.body.nome + "'", function (error, results) {
            if (error) {
                console.log(error.code);
                if (error.code != 'ER_DUP_ENTRY')
                    throw error;
            }
            db.query("SELECT ID from tags where nome = '" + req.body.nome + "'", function (error, results) {
                if (error)
                    throw error;
                if (results.length == 0) {
                    //Impossibile se l'insert ha funzionato
                }
                else {
                    db.query("INSERT INTO tagsdipendenti (ID_dipendente , ID_tag) VALUES (" + req.params.id + "," + results[0].ID + ")", function (error, results) {
                        if (error)
                            throw error;
                        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
                    });
                }
            });
        });
    });
    //API per la lettura dei tag associati ad ogni dipendente
    routes.get("/tags/dipendenti", function (req, res) {
        console.log("call API /tags");
        db.query('select td.ID as ID, t.nome , td.ID_dipendente as ID_dipendente  from tags as t,' +
            'tagsdipendenti as td where td.ID_tag = t.ID', function (error, results) {
            if (error)
                throw error;
            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessun Tags'
                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Tags',
                    tags: results
                });
            }
        });
    });
    //API per la lettura di tutti i tag
    routes.get("/tags", function (req, res) {
        console.log("call API /tags");
        db.query('select * from tags', function (error, results) {
            if (error)
                throw error;
            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessun Tags'
                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Tags',
                    tags: results
                });
            }
        });
    });
    //API per la cancellazione di un tag di un dipendente
    routes.delete("/dipendenti/:id/tags/:id_t", function (req, res) {
        db.query('delete from tagsdipendenti where tagsdipendenti.ID = ' + req.params.id_t, function (error, results) {
            if (error)
                throw error;
            console.log(results);
            res.json({
                success: true,
                message: 'Remove Tag',
            });
        });
    });
};

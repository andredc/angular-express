"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsRoute = function (app, db, jwt, routes) {
    //lista teams
    routes.get("/dipendenti/:id/tags", function (req, res) {
        console.log("call API /dipendenti/:" + req.params.id + "/tags");
        /*db.query('SELECT ruoli.ID, ruoli.descrizione, teams.nome FROM ruoli,utenti,teams ' +
            'WHERE   utenti.ID = ' + req.params.id + '&& ruoli.ID_utente = utenti.ID  && ruoli.ID_team = teams.ID',
            function (error: any, results: any, fields: any) {
                if (error) throw error;
                console.log(results)
                if (results.length == 0) {
                    res.json({
                        success: false,
                        message: 'Nessun Ruolo'
                    });
                } else {
                    res.json({
                        success: true,
                        message: 'Ruoli',
                        ruoli: results
                    });
                }
            });*/
    });
    routes.post("/dipendenti/:id/tags", function (req, res) {
        console.log("call API /dipendenti/" + req.params.id + "/tags");
        /*
            var ruoloData = {
                 "descrizione": req.body.nome_ruolo,
                 "ID_team":req.body.ID_team,
                 "ID_dipendente":req.body.ID_dipendente,
    
            };
        
            db.query("INSERT INTO ruoli ( descrizione, ID_utente, ID_team ) VALUES ('" +
                ruoloData.descrizione + "','" + ruoloData.ID_dipendente+ "','"+ ruoloData.ID_team +"')", function (error: any, results: any, fields: any) {
                    if (error) throw error;
                    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
                });
     */
    });
    routes.get("/tags", function (req, res) {
        console.log("call API /tags");
        /*db.query('select u.ID , u.nome, u.cognome, r.descrizione '+
            'from (utenti as u inner join ruoli as r on u.ID = r.ID_utente '+
            'inner join teams as t on r.ID_team = t.ID )'+
            'where u.ID = r.ID_utente && u.ID = '+  req.params.id, function(error:any,results:any){
            if (error) throw error;
                
            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessun Componente nel team'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Dipendendi Team',
                    dipendenti: results
                });
            }         })


       /* db.query('SELECT utenti.ID, utenti.nome, utenti.cognome, ruoli.descrizione' +
            'FROM utenti,teams,ruoli WHERE (utenti.ID = 1' + //req.params.id
             +'&& ruoli.ID_utente = utenti.ID && ruoli.ID_team = teams.ID)',

            function (error: any, results: any, fields: any) {
                if (error) throw error;

                if (results.length == 0) {
                    res.json({
                        success: false,
                        message: 'Nessun Componente nel team'
                    });
                } else {
                    res.json({
                        success: true,
                        message: 'Dipendendi Team',
                        dipendenti: results
                    });
                }
            });*/
    });
};

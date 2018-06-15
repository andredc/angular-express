import { Express } from "express-serve-static-core";
import { Request, Response, NextFunction } from "express";

//EndPoint per la gestione dei ruoli dei dipendenti
export const ruoliRoute = function (app: Express, db: any, jwt: any, routes: any) {

    //API per la lettura dei ruoli di un dipendente
    routes.get("/dipendenti/:id/ruoli", function (req: any, res: any) {
        console.log("call API /dipendenti/:" + req.params.id + "/ruoli")
        db.query('SELECT ruoli.ID, ruoli.descrizione, teams.nome FROM ruoli,utenti,teams ' +
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
            });
    });

    //API per l'aggiunta di un ruolo ad un dipendente
    routes.post("/dipendenti/:id/ruoli", function (req: any, res: any) {
        console.log("call API /dipendenti/" + req.params.id + "/ruoli")

        var ruoloData = {
            "descrizione": req.body.nome_ruolo,
            "ID_team": req.body.ID_team,
            "ID_dipendente": req.body.ID_dipendente,

        };

        db.query("INSERT INTO ruoli ( descrizione, ID_utente, ID_team ) VALUES ('" +
            ruoloData.descrizione + "','" + ruoloData.ID_dipendente + "','" + ruoloData.ID_team + "')", function (error: any, results: any, fields: any) {
                if (error) throw error;
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            });

    });

    //API per la lettura ruoli associata ai dipendenti di un team
    routes.get("/teams/:id/dipendenti", function (req: any, res: any) {
        console.log("ahaha")
        console.log("call API /teams/" + req.params.id + "/dipendenti")
        db.query('select u.ID , u.nome, u.cognome, r.descrizione ' +
            'from (utenti as u inner join ruoli as r on u.ID = r.ID_utente) ' +
            'inner join teams as t on r.ID_team = t.ID ' +
            'where u.ID = r.ID_utente && t.ID = ' + req.params.id, function (error: any, results: any) {
                if (error) throw error;
                console.log(results)
                if (results.length == 0) {
                    res.json({
                        success: false,
                        message: 'Nessun Componente nel team'
                    });
                } else {
                    res.json({
                        success: true,
                        message: 'Dipendenti Team',
                        dipendenti: results
                    });
                }
            })
    });

}





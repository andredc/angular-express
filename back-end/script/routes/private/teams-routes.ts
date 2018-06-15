import { Express } from "express-serve-static-core";
import { Request, Response, NextFunction } from "express";

//EndPoints relativo alla gestione dei teams
export const teamsRoute = function (app: Express, db: any, jwt: any,routes :any) {

    //API per la lettura dei teams
    routes.get("/teams", function (req: any, res: any) {
        console.log("call API /teams")
        db.query('SELECT * FROM teams ORDER BY ID', function (error: any, results: any, fields: any) {
            if (error) throw error;

            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessun Team'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Teams',
                    teams: results
                });
            }
        });
    });
    //API per la lettura del singolo Team
    routes.get("/teams/:id", function (req: any, res: any) {
        console.log("call API /teams/" +  req.params.id)
        db.query('SELECT * FROM teams where ID = ' + req.params.id, function (error: any, results: any, fields: any) {
            if (error) throw error;

            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'ID errato'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Team',
                    team: results
                });
            }
        });
    });

  
    //API per l'inserimento di un Team
    routes.post("/teams", function (req: any, res: any) {
        console.log("Call API/TEAMS")

        console.log(req.body)

        var teamData = {
            "nome": req.body.nome,
            "descrizione": req.body.descrizione
        };

        db.query("INSERT INTO teams ( nome , descrizione ) VALUES ('" +
            teamData.nome + "','" +  teamData.descrizione +"')", function (error: any, results: any, fields: any) {
                if (error) throw error;
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            });
 
    });

    //API per l'aggiornamento dei dati del Team
    routes.put("/teams/:id", function (req: any, res: any) {
        console.log("call API /teams/" +  req.params.id)
        console.log(req.body)
        var teamData = {
            "ID": req.body.ID,
            "nome": req.body.nome,
            "descrizione": req.body.descrizione
        };
        db.query("UPDATE teams SET nome = '"+ teamData.nome + "', descrizione = '"+ teamData.descrizione +
                "' WHERE ID= " + teamData.ID , function (error: any, results: any, fields: any) {
                if (error) throw error;
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            });
 

    })

     
}





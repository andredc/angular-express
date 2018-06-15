import { Express } from "express-serve-static-core";
import { Request, Response, NextFunction } from "express";

//contiene le API "pubbliche"
export const publicRoute = function (app: Express, db: any, jwt: any,routes :any) {

    //API Autentica l'utente e restuisce il token
    routes.post('/authenticate', function (req: any, res: any) {
        console.log(req.body.username + " - " + req.body.password)
        db.query('SELECT * FROM utenti WHERE username = "' + req.body.username + '" AND password = "' + req.body.password + '"', function (error: any, results: any, fields: any) {
            if (error) throw error;
            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Autenticazione fallita!'
                });
            } else { //user autenticato
                var user = {
                    ID: results[0].ID,
                    username: results[0].username,
                    password: results[0].password,
                    admin: results[0].admin,
                    IDProfile: results[0].IDProfile
                }

                var token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: 1440 // validità in ore ( 12 )
                });

                res.json({
                    success: true,
                    message: 'Autenticazione effettuata!',
                    token: token,
                    utente:user
                });
            }
        });
    });

    //API registrazione utente
    routes.post("/register", function (req: any, res: any) {
        console.log("Call API/REGISTER")
        //console.log(req)
        var userData = {
            "username": req.body.username,
            "password": req.body.password, 
            "nome": req.body.nome,
            "cognome": req.body.cognome,
            "email": req.body.email,
        };
        db.query("INSERT INTO utenti ( username , password , nome , cognome , email ) VALUES ('" +
            userData.username + "','" + userData.password +  "','" + userData.nome + 
             "','" + userData.cognome +  "','" + userData.email +"')", function (error: any, results: any, fields: any) {
                if (error) throw error;
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            });
 
    });




   
}





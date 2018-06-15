import { Express } from "express-serve-static-core";
import { Request, Response, NextFunction } from "express";


//EndPoints per la gestione delle skills dei dipendenti
export const skillsRoute = function (app: Express, db: any, jwt: any, routes: any) {
    
    //API per la lettura delle skills di un dipendente 
    routes.get("/dipendenti/:id/skills", function (req: any, res: any) {
        console.log("call API /dipendenti/" + req.params.id + "/skills")
        db.query('SELECT skillsdipendenti.ID , skills.nome, skillsdipendenti.descrizione,' +
            'skillsdipendenti.scadenza from skillsdipendenti,skills WHERE ' +
            'skillsdipendenti.ID_dipendente = ' + req.params.id + ' && skillsdipendenti.ID_skill = skills.ID',
            function (error: any, results: any, fields: any) {
                if (error) throw error;
                console.log(results)
                 results.forEach((element:any) => {
                     element.scadenza= (element.scadenza.getMonth() + 1) + '-' + element.scadenza.getDate()   + '-' + element.scadenza.getFullYear()
                  });
                if (results.length == 0) {
                    res.json({
                        success: false,
                        message: 'Nessuna Skills'
                    });
                } else {
                    res.json({
                        success: true,
                        message: 'Skills',
                        skills: results
                    });
                }
            });
    });

    //API per l'inserimento di una skill ad un dipendente
    routes.post("/dipendenti/:id/skills", function (req: any, res: any) {
        console.log("call API /dipendenti/" + req.params.id + "/skills")
        console.log(req.body.scadenza)
        /*var date = new Date (req.body.scadenza)
        var scadenza = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
        console.log(scadenza)
        console.log(date)
        */ 
        var skillData = {
            'ID_dipendente': req.body.ID_dipendente,
            'ID_skill': req.body.ID,
            'descrizione': req.body.descrizione,
            'scadenza': req.body.scadenza
        };
        console.log(skillData)
        db.query("INSERT INTO skillsdipendenti ( ID_dipendente, ID_skill, descrizione, scadenza ) VALUES ('" +
            skillData.ID_dipendente + "','" + skillData.ID_skill + "','" + skillData.descrizione + "','" + skillData.scadenza + "')", function (error: any, results: any, fields: any) {
                if (error) throw error;
                res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
            });

    });

    //API per l'aggiunta di una skill 
    routes.post("/skills", function (req: any, res: any) {
        console.log(req.body)
        console.log("call API /skills")
        db.query("INSERT INTO skills ( nome ) VALUES ('"+ req.body.name +"')" , function (error: any, results: any, fields: any) {
            if (error) throw error;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        
    });

    //API per la rimozione di una skill
    routes.delete("/skills/:id_s", function (req: any, res: any) {
        db.query('delete from skills where ID = '+ req.params.id_s,
            function (error: any, results: any) {
                if (error) throw error
                console.log(results)
                 
                    res.json({
                        success: true,
                        message: 'Remove Skill',
                    });
                });
    });

    //API per la lettura di tutte le skills ( non associate ad i dipendenti )
    routes.get("/skills", function (req: any, res: any) {
        console.log("call API /skills")
        db.query('SELECT * from skills ', function (error: any, results: any, fields: any) {
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
                    message: 'Skills',
                    skills: results
                });
            }
        });
    });

    //API per la lettura di tutte le skill associate a tutti i dipendenti
    routes.get("/skillsdipendenti", function (req: any, res: any) {
        console.log("call API /skillsdipendenti")
        db.query('SELECT u.ID, u.nome, u.cognome, s.nome as nomeSkill, sd.scadenza from skills as s , skillsdipendenti as sd,utenti as u WHERE sd.ID_skill ' +
            '= s.ID && sd.ID_dipendente = u.ID', function (error: any, results1: any, fields: any) {
                if (error) throw error;
                //console.log(results1)

                if (results1.length == 0) {
                    res.json({
                        success: false,
                        message: 'Nessuna skills'
                    });
                } else {
                    var results3: any = [];
                    db.query('	SELECT * from utenti GROUP BY utenti.ID', function (error: any, results2: any, fields: any) {
                        console.log(results2)
                        results2.forEach((u: any) => {
                            var skillsDipendente: any = {}
                            
                            results1.forEach((element: any) => {
                                //console.log(element.ID)
                                if (element.ID == u.ID) {
                                    var a:Date = new Date (element.scadenza)
                                    skillsDipendente[element.nomeSkill]= (a.getMonth() + 1) + '-' +   a.getDate()  + '-' +  a.getFullYear()

                                }

                            })
                            results3.push({
                                'id': u.ID,
                                'nome': u.nome,
                                'cognome': u.cognome,
                                'skills': skillsDipendente
                            })

                        });
                        res.json({
                            success: true,
                            message: 'Skills',
                            skills: results3
                        });
                    });


                }
            });
    });
}




        
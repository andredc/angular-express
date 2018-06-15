"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//EndPoints per la gestione delle skills dei dipendenti
exports.skillsRoute = function (app, db, jwt, routes) {
    //API per la lettura delle skills di un dipendente 
    routes.get("/dipendenti/:id/skills", function (req, res) {
        console.log("call API /dipendenti/" + req.params.id + "/skills");
        db.query('SELECT skillsdipendenti.ID , skills.nome, skillsdipendenti.descrizione,' +
            'skillsdipendenti.scadenza from skillsdipendenti,skills WHERE ' +
            'skillsdipendenti.ID_dipendente = ' + req.params.id + ' && skillsdipendenti.ID_skill = skills.ID', function (error, results, fields) {
            if (error)
                throw error;
            console.log(results);
            results.forEach(function (element) {
                element.scadenza = (element.scadenza.getMonth() + 1) + '-' + element.scadenza.getDate() + '-' + element.scadenza.getFullYear();
            });
            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessuna Skills'
                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Skills',
                    skills: results
                });
            }
        });
    });
    //API per l'inserimento di una skill ad un dipendente
    routes.post("/dipendenti/:id/skills", function (req, res) {
        console.log("call API /dipendenti/" + req.params.id + "/skills");
        console.log(req.body.scadenza);
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
        console.log(skillData);
        db.query("INSERT INTO skillsdipendenti ( ID_dipendente, ID_skill, descrizione, scadenza ) VALUES ('" +
            skillData.ID_dipendente + "','" + skillData.ID_skill + "','" + skillData.descrizione + "','" + skillData.scadenza + "')", function (error, results, fields) {
            if (error)
                throw error;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    });
    //API per l'aggiunta di una skill 
    routes.post("/skills", function (req, res) {
        console.log(req.body);
        console.log("call API /skills");
        db.query("INSERT INTO skills ( nome ) VALUES ('" + req.body.name + "')", function (error, results, fields) {
            if (error)
                throw error;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    });
    //API per la rimozione di una skill
    routes.delete("/skills/:id_s", function (req, res) {
        db.query('delete from skills where ID = ' + req.params.id_s, function (error, results) {
            if (error)
                throw error;
            console.log(results);
            res.json({
                success: true,
                message: 'Remove Skill',
            });
        });
    });
    //API per la lettura di tutte le skills ( non associate ad i dipendenti )
    routes.get("/skills", function (req, res) {
        console.log("call API /skills");
        db.query('SELECT * from skills ', function (error, results, fields) {
            if (error)
                throw error;
            console.log(results);
            if (results.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessun Ruolo'
                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Skills',
                    skills: results
                });
            }
        });
    });
    //API per la lettura di tutte le skill associate a tutti i dipendenti
    routes.get("/skillsdipendenti", function (req, res) {
        console.log("call API /skillsdipendenti");
        db.query('SELECT u.ID, u.nome, u.cognome, s.nome as nomeSkill, sd.scadenza from skills as s , skillsdipendenti as sd,utenti as u WHERE sd.ID_skill ' +
            '= s.ID && sd.ID_dipendente = u.ID', function (error, results1, fields) {
            if (error)
                throw error;
            //console.log(results1)
            if (results1.length == 0) {
                res.json({
                    success: false,
                    message: 'Nessuna skills'
                });
            }
            else {
                var results3 = [];
                db.query('	SELECT * from utenti GROUP BY utenti.ID', function (error, results2, fields) {
                    console.log(results2);
                    results2.forEach(function (u) {
                        var skillsDipendente = {};
                        results1.forEach(function (element) {
                            //console.log(element.ID)
                            if (element.ID == u.ID) {
                                var a = new Date(element.scadenza);
                                skillsDipendente[element.nomeSkill] = (a.getMonth() + 1) + '-' + a.getDate() + '-' + a.getFullYear();
                            }
                        });
                        results3.push({
                            'id': u.ID,
                            'nome': u.nome,
                            'cognome': u.cognome,
                            'skills': skillsDipendente
                        });
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
};

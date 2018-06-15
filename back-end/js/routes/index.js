"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var public_routes_1 = require("./public/public-routes");
var teams_routes_1 = require("./private/teams-routes");
var utenti_routes_1 = require("./private/utenti-routes");
var ruoli_routes_1 = require("./private/ruoli-routes");
var skills_routes_1 = require("./private/skills-routes");
var tags_routes_1 = require("./private/tags-routes");
// register here any API controller
exports.allRoutes = [
    public_routes_1.publicRoute,
    // authRoute, //questa route gestice l'autenticazione, tutte le rotte al di sotto necessitano di token
    teams_routes_1.teamsRoute,
    utenti_routes_1.utentiRoute,
    ruoli_routes_1.ruoliRoute,
    skills_routes_1.skillsRoute,
    tags_routes_1.tagsRoute,
];

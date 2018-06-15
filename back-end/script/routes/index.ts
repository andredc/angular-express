import { Express } from 'express';
import { publicRoute } from './public/public-routes';
import { authRoute } from './public/auth-routes';

import { teamsRoute } from './private/teams-routes';
import { utentiRoute } from './private/utenti-routes';
import { ruoliRoute } from './private/ruoli-routes';
import { skillsRoute } from './private/skills-routes';
import { tagsRoute } from './private/tags-routes';
    
// register here any API controller
export const allRoutes: Array<(app: Express,db: any, jwt: any,routes :any) => void> = [
    publicRoute,
   // authRoute, //questa route gestice l'autenticazione, tutte le rotte al di sotto necessitano di token
    teamsRoute,
    utentiRoute,
    ruoliRoute,
    skillsRoute,
    tagsRoute,
];



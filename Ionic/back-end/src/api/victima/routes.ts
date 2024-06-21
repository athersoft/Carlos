import express from 'express';

import controllers from './controllers';
import middlewares from '../middlewares';

const routes = express.Router();

routes.get('/getInfo', middlewares.authGuard, controllers.getVictim)
routes.post('/create', middlewares.authGuard, controllers.createVictim);
routes.put('/modify', middlewares.authGuard, controllers.modifyVictim);
routes.delete('/delete', middlewares.authGuard, controllers.deleteVictim);

export default routes;

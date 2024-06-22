import express from 'express';

import controllers from './controllers';
import middlewares from '../middlewares';

const victimRoutes = express.Router();

victimRoutes.get('/getInfo', middlewares.authGuard, controllers.getVictim)
victimRoutes.post('/create', middlewares.authGuard, controllers.createVictim);
victimRoutes.put('/modify', middlewares.authGuard, controllers.modifyVictim);
victimRoutes.delete('/delete', middlewares.authGuard, controllers.deleteVictim);

export default victimRoutes;

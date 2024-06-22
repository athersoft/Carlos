import express from 'express';

import controllers from './controllers';
import middlewares from '../middlewares';

const expRoutes = express.Router();

expRoutes.get('/getExplorations', middlewares.authGuard, controllers.getExploration)
expRoutes.post('/create', middlewares.authGuard, controllers.startExploration)
expRoutes.put('/modify', middlewares.authGuard, controllers.modifyExploration);
expRoutes.delete('/delete', middlewares.authGuard, controllers.deleteExploration);

export default expRoutes;

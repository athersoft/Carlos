import express from 'express';

import controllers from './controllers';
import middlewares from '../middlewares';

const authRoutes = express.Router();

authRoutes.get('/getExplorations', middlewares.authGuard, controllers.getExploration)
authRoutes.post('/create', middlewares.authGuard, controllers.startExploration)
authRoutes.put('/modify', middlewares.authGuard, controllers.modifyExploration);
authRoutes.delete('/delete', middlewares.authGuard, controllers.deleteExploration);

export default authRoutes;

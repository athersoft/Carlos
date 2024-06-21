import express from 'express';

import controllers from './controllers';
import middlewares from '../middlewares';

const authRoutes = express.Router();

authRoutes.get('/getUser', middlewares.authGuard, controllers.getUserFromToken)
authRoutes.post('/signup', controllers.createAccount);
authRoutes.post('/login', controllers.logIn);

export default authRoutes;

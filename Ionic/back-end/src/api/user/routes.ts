import express from 'express';

import controllers from './controllers';
import middlewares from '../middlewares';

const userRoutes = express.Router();

userRoutes.get('/getUser', middlewares.authGuard, controllers.getUserFromToken)
userRoutes.post('/signup', controllers.createAccount);
userRoutes.post('/login', controllers.logIn);

export default userRoutes;

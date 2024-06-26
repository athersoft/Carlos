import express from 'express';

import controllers from './controllers';
import middlewares from '../middlewares';

const userRoutes = express.Router();

userRoutes.post('/signUp', controllers.createAccount);
userRoutes.post('/logIn', controllers.logIn);
userRoutes.get('/isEmailRegistered', controllers.isEmailRegistered);
userRoutes.get('/getUserFromToken', controllers.getUserFromToken);
userRoutes.put('/modifyAccount', controllers.modifyAccount);
userRoutes.delete('/deleteAccount', controllers.deleteAccount);

export default userRoutes;

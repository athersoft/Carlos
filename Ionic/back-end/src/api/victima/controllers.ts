import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { validateIn } from '../functions';
import { CustomRequest } from '../middlewares';
import { repositoryOfUsers } from '../../data/functions/users';

const SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'secretkey';

async function getVictim(req: Request, res: Response): Promise<void> {
  // Converts the token
  const token = (req as CustomRequest).token;
  // Tries to get the user using the token
  const usuario = await repositoryOfUsers.findOne({
    where: { name: token.id },
  });

  // Returns the user (if any)
  res.status(200).send({
    usuario: {
      username: usuario?.name,
      rol: usuario?.rol,
    },
  });
}

async function createVictim(req: Request, res: Response): Promise<void> {
  
}

async function modifyVictim(req: Request, res: Response): Promise<void> {
  
}

async function deleteVictim(req: Request, res: Response): Promise<void> {

}

export default {
  getVictim,
  createVictim,
  modifyVictim,
  deleteVictim
};

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { validateIn } from '../functions';
import { CustomRequest } from '../middlewares';

const SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'secretkey';

async function getExploration(req: Request, res: Response): Promise<void>
{
  console.log("Getting Exploration");
  /*
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
  */
}

async function startExploration(req: Request, res: Response): Promise<void>
{
  console.log("Starting Exploration");  
}

async function modifyExploration(req: Request, res: Response): Promise<void>
{
  console.log("Modifying Exploration");    
}

async function deleteExploration(req: Request, res: Response): Promise<void>
{
  console.log("Deleting Exploration");  
}

export default {
  getExploration,
  startExploration,
  modifyExploration,
  deleteExploration
};

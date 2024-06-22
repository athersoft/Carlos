import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { validateIn } from '../functions';
import { CustomRequest } from '../middlewares';

const SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'secretkey';

async function getVictim(req: Request, res: Response): Promise<void> {
  // Converts the token
  const token = (req as CustomRequest).token;
  // Tries to get the user using the token
  const user = await repositoryOfUsers.findOne({
    where: { name: token.id },
  });

  // Returns the user (if any)
  res.status(200).send({
    usuario: {
      username: user?.name
    },
  });
}

async function createVictim(req: Request, res: Response): Promise<void> {
  if (!validateIn(req.body, ['masive'])) {
    res.status(400).json({
      message: 'Error: No se han recibido todos los datos necesarios',
    });
    return;
  }
  const victReq: {titulo: string, contenido: string}[] = req.body.masive;
  const { email } = (req as CustomRequest).token;
  const user = await repositoryOfUsers.findOneBy({ email });
  const docs = repositoryOfVictims.create(victReq.map((doc) => ({...doc, user: user })));
  const savedDoc = await repositoryOfVictims.save(docs);
  res.status(201).json({
    message: 'Documentos creados con éxito',
    doc: savedDoc.map(doc => ({...doc, user: user?.name})),
  });
  return;
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

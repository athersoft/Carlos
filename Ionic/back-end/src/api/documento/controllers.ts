import { Request, Response } from 'express';

import { repositoryOfVictims } from '../../data/functions/victims';
import { repositoryOfUsers } from '../../data/functions/users';
import { validateIn } from '../functions';
import { CustomRequest } from '../middlewares';
import { User } from '../../data/entity/User';

async function getDocs(req: Request, res: Response) {
  const docs = await repositoryOfVictims.find();
  res.status(200).json({
    message: 'Lista de documentos',
    docs,
  });
}

async function addDocs(req: Request, res: Response) {
  if (!validateIn(req.body, ['masive'])) {
    res.status(400).json({
      message: 'Error: No se han recibido todos los datos necesarios',
    });
    return;
  }
  const docsReq: {titulo: string, contenido: string}[] = req.body.masive;
  const { email } = (req as CustomRequest).token;
  const user = await repositoryOfUsers.findOneBy({ email });
  const docs = repositoryOfVictims.create(docsReq.map((doc) => ({...doc, user: user })));
  const savedDoc = await repositoryOfVictims.save(docs);
  res.status(201).json({
    message: 'Documentos creados con éxito',
    doc: savedDoc.map(doc => ({...doc, user: user?.name})),
  });
  return;
}

async function addDoc(req: Request, res: Response) {
  if (!validateIn(req.body, ['titulo', 'contenido'])) {
    res.status(400).json({
      message: 'Error: No se han recibido todos los datos necesarios',
    });
    return;
  }
  const { titulo, contenido } = req.body;
  const { email } = (req as CustomRequest).token;
  const doc = repositoryOfVictims.create({ titulo, contenido, usuario: await repositoryOfUsers.findOneBy({ email })});
  const savedDoc = await repositoryOfVictims.save(doc);
  res.status(201).json({
    message: 'Documento creado con éxito',
    doc: {
      ...savedDoc,
      user: user,
    },
  });
}

async function updateDoc(req: Request, res: Response) {
  if (!validateIn(req.body, ['id'])) {
    res.status(400).json({
      message: 'Error: No se han recibido todos los datos necesarios',
    });
    return;
  }
  const { id, titulo, contenido } = req.body;
  const victim = await repositoryOfVictims.findOneBy({id});
  if (!victim) {
    res.status(404).json({
      message: 'Documento no encontrado',
    });
    return;
  }
  victim.titulo = titulo ?? victim.titulo;
  victim.contenido = contenido ?? victim.contenido;
  const savedDoc = await repositoryOfVictims.save(victim);
  res.status(200).json({
    message: 'Documento actualizado con éxito',
    doc: savedDoc,
  });
}

async function deleteDoc(req: Request, res: Response) {
  if (!validateIn(req.body, ['id'])) {
    res.status(400).json({
      message: 'Error: No se han recibido todos los datos necesarios',
    });
    return;
  }
  const { id } = req.body;
  const doc = await repositoryOfVictims.findOneBy({id});
  if (!doc) {
    res.status(404).json({
      message: 'Documento no encontrado',
    });
    return;
  }
  await repositoryOfVictims.delete(id);
  res.status(200).json({
    message: 'Documento eliminado con éxito'
  });
}

export default { getDocs, addDocs, addDoc, updateDoc, deleteDoc};

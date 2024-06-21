import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'secretkey';

export interface CustomRequest extends Request {
  token: { id: string; username: string; rol: string };
}

function authGuard(req: Request, res: Response, next: NextFunction): void {
  
  const authorization = req.header('authorization');
  if (!authorization) {
    res.status(401).send({
      message: 'Error: The authorization token is missing.',
    });
    return;
  }
  const token = authorization.replace('Bearer ', '');
  try {
    const decoded: { id: string; username: string; rol: string } = jwt.verify(
      token,
      SECRET_KEY,
    ) as { id: string; username: string; rol: string };
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    res.status(401).send({
      message: 'Error: The authentication token is invalid.',
    });
    return;
  }
}
export default {
  authGuard,
};

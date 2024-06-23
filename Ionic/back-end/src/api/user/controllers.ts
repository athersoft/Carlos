import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { validateIn } from '../functions';
import { CustomRequest } from '../middlewares';
import { StartQuery, IsEmailRegistered } from '../../main';

const SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'secretkey';

async function createAccount(req: Request, res: Response): Promise<void>
{
  console.log("Creating Account");
  //IsEmailRegistered("aaaaaaaaaa@b.c").then( result => console.log(result));

  // Tries to validate the data obtained
  if (!validateIn(req.body, ['name', 'email', 'password', 'run', 'region', 'commune'])) {
    res.status(400).send({
      message: 'Error: Missing data.',
    });
    return;
  }

  const { name, email, password, run, region, commune } = req.body;

  // Checks if the account already exist
  // Checks if the email is already registered
  //if (await alreadyRegistederEmail(req.body.email)) {
  if (false) {
    res
      .status(400)
      .json({
        message: 'This e-mail is already registered.',
      })
      .end();
    return;
  }

  // Encripts the password
  const hashedPass = bcrypt.hashSync(password, 10);

  // Creates the user using the values received
  const retData = await StartQuery(`INSERT INTO user (name, email, password, run, region, commune) VALUES (${name}, ${email}, ${password}, ${run}, ${region}, ${commune});`);
  const user = retData[0];

  console.log("Return from insert = ",user);

  res.status(201).send({
    message: 'Account created successfully.',
    user: {
      name: name,
      email: email
    },
  });
}

async function logIn(req: Request, res: Response): Promise<void> {
  console.log("Logging In");

  console.log(req.body);

  // Checks if there is data missing
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: 'Error: Missing data.',
    });
    return;
  }
  // Gets the email and password received
  const { email, password } = req.body;

  // Tries to get a user with the email
  const retData = await StartQuery("SELECT id, name, email, password FROM user WHERE email = '" + req.body.email + "';");
  const user = retData[0];
  console.log("User =", user);

  // If it doesn't find any, that means the email doesn't exists there
  if (!user) {
    res.status(404).send({
      message: 'The e-mail and/or password are incorrect.',
    });
    return;
  }

  console.log("Password =", password);
  console.log("User.Password =", user.password);

  // Temporary solution
  const encryptedPassword = bcrypt.hashSync(user.password, 10);

  console.log("User.Password =", encryptedPassword);

  // Checks if the password coincides with the encrypted password
  if (!bcrypt.compareSync(password, encryptedPassword)) {
    res.status(401).send({
      message: 'The e-mail and/or password are incorrect.',
    });
    return;
  }

  // Signs in and gets the token, I should probably use a boolean to extend the time
  // for example "Remember my account for 30 days (True/False)"
  const token = jwt.sign(
    { name: user.email },
    SECRET_KEY,
    { expiresIn: '24h' },
  );

  // If we reach this, that means the log in was successful, so we return
  // the token and info of the user
  res.status(200).send({
    message: 'Successfully logged in.',
    token: {
      token,
      expiresOn: new Date(Date.now() + 24 * 60 * 60 * 1000).getTime(),
    },
    user: {
      name: user.name
    },
  });
}

async function getUserFromToken(req: Request, res: Response): Promise<void>
{
  console.log("Getting user from token");
  /*
  // Converts the token
  const token = (req as CustomRequest).token;
  // Tries to get the user using the token
  const user = await repositoryOfUsers.findOne({
    where: { name: token.id },
  });

  // Returns the user (if any)
  res.status(200).send({
    user: {
      name: user?.name
    },
  });
  */
}

export default {
  createAccount,
  logIn,
  getUserFromToken
};

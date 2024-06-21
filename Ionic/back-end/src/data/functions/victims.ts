import AppDataSource from '..';

import { Victims } from '../entity/Victim';

export const repositoryOfUsers = AppDataSource.getRepository(Victims);
export async function alreadyRegistederEmail(
  email: string,
): Promise<boolean> {
  return (await repositoryOfUsers.findOne({
    where: { email },
  }))
    ? true
    : false;
}

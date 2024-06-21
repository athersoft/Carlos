import AppDataSource from '..';

import { User } from '../entity/User';

export const repositoryOfUsers = AppDataSource.getRepository(User);
export async function alreadyRegistederEmail(
  email: string,
): Promise<boolean> {
  return (await repositoryOfUsers.findOne({
    where: { email },
  }))
    ? true
    : false;
}

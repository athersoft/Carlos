import AppDataSource from '..';

import { Victim } from '../entity/Victims';

export const repositoryOfVictims = AppDataSource.getRepository(Victim);

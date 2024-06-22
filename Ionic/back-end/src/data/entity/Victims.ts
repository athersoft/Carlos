import { Entity, Column, Unique, PrimaryColumn, OneToMany, IntegerType } from 'typeorm';

import { User } from './User';

Entity()
Unique(['id', 'user'])
export class Victim {
  PrimaryColumn()
  id: number;

  @Column({ type: 'text', length: 80 })
  name: string;

  @Column({ type: 'text', length: 20 })
  state: string;

  @ManyToOne(() => User, (user) => user.victims)
  user: User;
}

import { Entity, Column, Unique, PrimaryColumn, OneToMany } from 'typeorm';

import { Victim } from './Victims';

@Entity()
@Unique(['id', 'email'])
export class User {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'text', length: 80 })
  name: string;

  @Column({ type: 'text', length: 80 })
  email: string;

  @Column({ type: 'text', length: 20 })
  password: string;

  @Column({ type: 'text', length: 12 })
  run: string;

  @Column({ type: 'text', length: 20 })
  rol: string;

  @OneToMany(() => Victim, (victim) => victim.user)
  victims: Victim[];
}

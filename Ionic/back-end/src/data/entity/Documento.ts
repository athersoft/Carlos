import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Documento {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @Column({ nullable: false })
  titulo: string;

  @Column({ nullable: false })
  contenido: string;

  @ManyToOne(() => User, (usuario) => usuario.victims)
  usuario: User;
}

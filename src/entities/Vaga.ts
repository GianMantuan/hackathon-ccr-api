import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('vaga')
export default class Vaga {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  empresa: string;

  @Column()
  status: boolean;

  @Column()
  pretensaoId: string;
}
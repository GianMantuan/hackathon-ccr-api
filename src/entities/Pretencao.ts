import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pretencao')
export default class Pretencao {
  @PrimaryGeneratedColumn('uuid')
  _id: string

  @Column()
  descricao: string

  @Column()
  pretencaoId: string
}
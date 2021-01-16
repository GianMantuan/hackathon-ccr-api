import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('experiencia')
export default class Experiencia {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  curriculoId: string

  @Column()
  cargo: string

  @Column()
  empresa: string

  @Column()
  descricao: string

  @Column()
  dataInicio: Date

  @Column()
  dataTermino?: Date
}
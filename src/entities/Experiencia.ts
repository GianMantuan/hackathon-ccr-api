import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Curriculo from './Curriculo';

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

  @ManyToOne(() => Curriculo, curriculo => curriculo.experiencia)
  @JoinColumn({name: 'curriculoId'})
  curriculo: Curriculo;
}
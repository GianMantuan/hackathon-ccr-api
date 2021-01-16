import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Curriculo from './Curriculo'

@Entity('certificado')
export default class Certificado {
  @PrimaryGeneratedColumn('uuid')
  _id: string

  @Column()
  curriucloId: string

  @Column()
  nome: string

  @Column()
  dataEmissao: Date

  @Column()
  dataExpirar?: Date

  @ManyToOne(() => Curriculo, curriculo => curriculo.certificado)
  @JoinColumn({name: 'curriculoId'})
  curriculo: Curriculo;
}
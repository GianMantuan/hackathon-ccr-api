import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

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

  
}
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import CurriculoVaga from "./CurriculoVaga";
import Pretensao from "./Pretensao";

@Entity('vaga')
export default class Vaga {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  pretencaoId: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  empresa: string;

  @Column()
  status: boolean;

  @OneToMany(() => CurriculoVaga, (CurriculoVaga) => CurriculoVaga.vagaId)
  @JoinColumn({name: '_id'})
  curriculoVaga: CurriculoVaga[]

  @ManyToMany(() => Pretensao, (pretensao) => pretensao.vaga)
  @JoinTable({
    name: 'vaga_pretencao',
    joinColumn: {
      name: 'vagaId'
    },
    inverseJoinColumn: {
      name: 'pretensaoId'
    }
  })
  pretensao: Pretensao[]
}